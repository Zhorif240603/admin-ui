
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Mydatatable from "../../components/mydatatable/Mydatatable";
import "./mylist.scss";


const Mylistdata = () => {
  return (
    <div className="mylistdata">
      <Sidebar />
      <div className="mylistdataContainer">
        <Navbar/>
          <div className="widget">
          <Widget type="user"/>
          <Widget type="order"/>
          <Widget type="earning"/>
         <Widget type="balance"/>
      </div>
      <div className="mydatatable"></div>
      <Mydatatable />
    
    
  </div>
  </div>
  );
};

export default Mylistdata;