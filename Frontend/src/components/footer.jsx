import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <div
      className="bottom-0, left-0, right-0 text-white "
      style={{ height: "150px", backgroundColor: "gray", opacity:0.3, position: "relative"  }}
    >
      <div className="flex  items-center justify-center">
        <div className="px-24 pt-3" style={{ opacity: 1}}>
          <h2> Follow me on:</h2>

          <div className="flex justify-center items-center hover:text-orange-500">
            {/* GitHub */}
            <a
              href="https://github.com/cassandra18"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3"
            >
              <button
                className="icon-button"
                style={{ backgroundColor: "transparent", color: "#05FFC9" }}
              >
                <FaGithub size={24} />
              </button>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/cassandra-lelei-88987a269"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4"
            >
              <button className="icon-button">
                <FaLinkedin size={24} />
              </button>
            </a>
          </div>
        </div>

        <div className="px-24" style={{ opacity: 1}}>
          <h2>Opening hours:</h2>
          <h2>9:00 am - 5:00 pm</h2>
        </div>
      </div>
        <div className="text-center bottom-0 py-3 absolute left-0 right-0" style={{ opacity: 1}}>
          <p>Copyright 2024 |  Cassandra Lelei </p>
          <p>All rights reserved</p>
        </div>
    </div>
  );
}
