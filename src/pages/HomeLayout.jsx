import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/NavBar";

const HomeLayout = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Outlet></Outlet>
    </React.Fragment>
  );
};

export default HomeLayout;
