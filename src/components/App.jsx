import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../assets/css/global.css";
import Home from "../pages/Home";
import HomeLayout from "../pages/HomeLayout";
import CustomMode from "../pages/MainGame/CustomMode";
import ExpressMode from "../pages/MainGame/ExpressMode";
import SelectMode from "../pages/MainGame/SelectMode";

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />

          <Route path="start-game" element={<SelectMode />} />
          <Route path="express-mode" element={<ExpressMode />} />
          <Route path="custom-mode" element={<CustomMode />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
