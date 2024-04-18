import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";


const Header = () => {
    //Nav Items
    const navItems = [
        { path: "#home", link: "Home" },
        { path: "#about", link: "About" },
        { path: "#services", link: "Services" },
        { path: "#skills", link: "Skills" },
        { path: "#experience", link: "Experience" },
        { path: "#contact", link: "Contact" },
    ];

    const scrollToSection = (e, id) => {
        e.preventDefault();
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className=" text-white fixed top-0 left-20 right-20 my-1 mx-auto px-6 rounded-full z-10"
        style={{ backdropFilter: "blur(10px)", background: "rgba(0, 0, 0, 0.3)" }}>
            <nav className="px-4 py-2 max-w-7xl flex justify-between items-center">
                <h1 className="">
                    <a href="#home" className="text-xl font-bold">Cassandra <span className="text-orange-500 px-1">Lelei</span></a>
                </h1>
                
                {/* navItems for large devices */}
                <ul className="md:flex gap-9 text-lg hidden">
                    {navItems.map(({ path, link }) => (
                        <li key={ path }>
                             <a href={path} onClick={(e) => scrollToSection(e, path)} className="hover:text-orange-500">{link}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header;