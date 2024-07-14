import { useState } from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import Newdata from "./pages/newdata/Newdata";
import { productInputs, userInputs,categoriesInputs} from "./formsource";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Mylistdata from "./pages/mylistdata/Mylistdata";
import "./style/dark.scss";
import { useContext } from "react";
import {DarkModeContext} from './context/darkModeContext'
import { AuthContext } from "./context/AuthContext";
import { userColumns,productColumns } from "./datatablesource";


function App() {
  const {darkMode} = useContext(DarkModeContext);

  const {currentUser} = useContext(AuthContext);

  const RequireAuth= ({ children }) =>{
    return currentUser? children : <Navigate to="/login" />;
  };

  const NotRequireAuth= ({ children }) =>{
    return currentUser?<Navigate to="/login" /> : children;
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<NotRequireAuth><Login /></NotRequireAuth>}></Route>
            <Route index element={<RequireAuth><Home /></RequireAuth>}></Route>
            <Route path="users">
              <Route index element={<RequireAuth><List columns= {userColumns} /></RequireAuth>}></Route>
              <Route path=":userId" element={<RequireAuth><Single columns={userColumns} /></RequireAuth>}></Route>
              <Route
                path="new"
                element={<RequireAuth><Newdata inputs={userInputs} title="Add New User" /></RequireAuth>}
              />
            </Route>
            <Route path="products">
              <Route index element={<RequireAuth><List columns={productColumns} /></RequireAuth>}></Route>
              <Route path=":productId" element={<RequireAuth><Single columns={productColumns}/></RequireAuth>}></Route>
              <Route
                path="new"
                element={<RequireAuth><Newdata inputs={productInputs} title="Add New Product" /></RequireAuth>}
              />
            </Route>
            <Route path="categories">
              <Route index element={<RequireAuth><Mylistdata columns={productColumns}/></RequireAuth>}></Route>
              <Route path=":categoriesId" element={<RequireAuth><Single columns={productColumns}/></RequireAuth>}></Route>
              <Route
                path="new"
                element={<RequireAuth><Newdata inputs={categoriesInputs} title="Add New Categories" /></RequireAuth>}
              />

            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
