import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Header from "./components/header";
import Footer from "./components/footer";
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
    return (
        <div className="h-full">
            <Header />
            <Outlet />
            <ToastContainer />
            
            <Footer />
        </div>
    )
};

export default App;