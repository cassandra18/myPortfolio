import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { FaXmark } from "react-icons/fa6";

const Header = () => {
  //menu states
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState(null); // State to track active menu item

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  //Nav Items
  const navItems = [
    { path: "#home", link: "Home" },
    { path: "#about", link: "About" },
    { path: "#services", link: "Services" },
    { path: "#skills", link: "Skills" },
    { path: "#contact", link: "Contact" },
  ];

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Function to set active menu item
  const handleMenuItemClick = (index) => {
    setActiveMenuItem(index);
    setIsMenuOpen(false); // Close the menu after clicking on a menu item
  };

  return (
    <header
    className="text-white fixed top-0 left-0 right-0 my-1 mx-auto px-4  z-10"
    >
      <nav className="px-4 py-2 max-w-7xl flex justify-between items-center rounded-full mx-auto" style={{ backdropFilter: "blur(10px)", background: "rgba(0, 0, 0, 0.3)" }}
      >
        <h1 className="text-xl font-bold">
          <a href="#home" className="text-xl font-bold">
            Cassandra <span className="text-orange-500 px-1">Lelei</span>
          </a>
        </h1>

        {/* navItems for large devices */}
        <ul className="md:flex gap-9 text-lg hidden">
          {navItems.map(({ path, link }, index) => (
            <li key={path}>
              <a
                href={path}
                onClick={(e) => {
                  scrollToSection(e, path);
                  handleMenuItemClick(index); // Set active menu item
                }}
                className={`hover:text-orange-500 ${activeMenuItem === index ? "active" : ""}`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button, visible only on mobile screens */}
        
          <button
            className="md:hidden green-color font-bold text-2xl bg-transparent"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FaXmark /> : <IoIosMenu />}
          </button>
          
        
      </nav>

      {/* Menu for small screens */}

      <div className={`md:hidden, ${isMenuOpen ? "" : "hidden"}`}>
        <ul
          className="text-lg text-white rounded-2xl space-y-4 px-4 py-6"
          style={{
            backdropFilter: "blur(10px)",
            background: "rgba(1, 1, 1, 0.3)",
          }}
        >
          {navItems.map(({ path, link }, index) => (
            <li key={path}>
              <a
                onClick={() => {
                  handleMenuItemClick(index); // Set active menu item
                }}
                href={path}
                className={activeMenuItem === index ? "active" : ""}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
