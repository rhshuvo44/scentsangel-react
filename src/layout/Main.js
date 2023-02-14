import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/shared/Footer";
import Navbar from "../components/shared/Navbar";

const Main = () => {
  return (
    <Navbar>
      <Outlet />
      <Footer />
    </Navbar>
  );
};

export default Main;
