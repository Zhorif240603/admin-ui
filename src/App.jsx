import { useState } from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import Newdata from "./pages/newdata/Newdata";
import { productInputs, userInputs} from "./formsource";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mylistdata from "./pages/mylistdata/Mylistdata";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="users">
              <Route index element={<List />}></Route>
              <Route path=":userId" element={<Single />}></Route>
              <Route 
                path="new" 
                element={<Newdata inputs={userInputs} title="Add New User" />} />
                </Route>
                <Route path="products">
                <Route index element={<List />}></Route>
                <Route path=":productId" element={<Single />}></Route>
                <Route
                path="new"
                element={<Newdata inputs={productInputs} title="Add New Product" />} />
                </Route>
               
                <Route path="categories" element={<Mylistdata />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
