import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./components/header";
import Footer from "./components/footer";
import BackToTop from "./components/backToTop";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
   
  return (
    <div className="h-full">
      <Header />
      <Outlet />
      <ToastContainer />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default App;
