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
        <header className="">
            <nav className="">
                <h1>
                    <Link to="/" className="">
                        Cassandra <span className="">Lelei</span>
                    </Link>
                </h1>

                {/* navItems for large devices */}
                <ul className="">
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