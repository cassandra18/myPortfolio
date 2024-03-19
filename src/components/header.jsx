import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";


const Header = () => {
    //Nav Items
    const navItems = [
        { path: "/", link: "Home" },
        { path: "/about", link: "About" },
        { path: "/services", link: "Services" },
        { path: "/skills", link: "Skills" },
        { path: "/experience", link: "Experience" },
        { path: "/contact", link: "Contact" },
    ];

    return (
        <header className="bg-gray-800 text-white fixed top-0 left-20 right-20 my-10 mx-auto px-6 rounded-full">
            <nav className="px-4 py-2 max-w-7xl flex justify-between items-center">
                <h1 className="">
                    <Link to="/" className="text-xl font-bold">
                        Cassandra <span className="text-orange-500 px-1">Lelei</span>
                    </Link>
                </h1>
                
                {/* navItems for large devices */}
                <ul className="md:flex gap-9 text-lg hidden">
                    {navItems.map(({ path, link }) => (
                        <li key={ path }>
                            <NavLink to={ path } className={({ isActive }) =>
                            isActive ? "active" : ""}> {link}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header;