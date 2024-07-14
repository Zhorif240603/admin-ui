import "./newdata.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState } from "react";
import { doc, serverTimestamp, setDoc, addDoc, collection } from "firebase/firestore";
import { auth, db, storage } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate, useLocation } from "react-router-dom";

const Newdata = ({ inputs, title }) => {
  const [file, setFile] = useState(null);
  const [data, setData] = useState({});
  const [per, setPerc] = useState(null);
  const navigate = useNavigate();
  const location = useLocation(); 
  const type = location.pathname.split('/')[1]; 

  useEffect(() => {
    const uploadFile = () => {
      if (!file) return;

      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setPerc(progress);
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            handleAdd(downloadURL);
          });
        }
      );
    };

    if (file) uploadFile();
  }, [file]);

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setData({ ...data, [id]: value });
  };

  const handleAdd = async (imageUrl = null) => {
    try {
      const categoryData = { ...data, timeStamp: serverTimestamp() };

      if (imageUrl) {
        categoryData.img = imageUrl; // Tambahkan img hanya jika ada
      }

      if (type === "users") {
        const res = await createUserWithEmailAndPassword(auth, data.email, data.password);
        await setDoc(doc(db, type, res.user.uid), categoryData);
      } else {
        await addDoc(collection(db, type), categoryData);
      }

      navigate(-1);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      handleAdd(); // Panggil handleAdd tanpa URL gambar jika tidak ada file
    }
  };

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            {file ? (
              <img
                src={URL.createObjectURL(file)}
                alt=""
              />
            ) : (
              <img
                src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                alt="No Image"
              />
            )}
          </div>
          <div className="right">
            <form onSubmit={handleSubmit}>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                    onChange={handleInput}
                  />
                </div>
              ))}
              <button disabled={per !== null && per < 100} type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newdata;
