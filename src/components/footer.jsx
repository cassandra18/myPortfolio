import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <div>
      <div>
        <h2> Follow me on:</h2>
        
          <div>
            {/* GitHub */}
            <a
              href="https://github.com/cassandra18"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3"
            >
              <button className="icon-button" style={{ backgroundColor: "transparent", color: "#05FFC9"}}>
                <FaGithub  size={24}/>
              </button>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/cassandra-lelei-88987a269"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4"
            >
              <button className="icon-button" >
                <FaLinkedin size={24}/>
              </button>
            </a>
          </div>

      </div>

      <div>
        <h2>Opening hours:</h2>
        <h2>9:00 am - 5:00 pm</h2>
      </div>

      <div>
        <p>Copyright Cassandra Lelei 2024</p>
        <p>All rights reserved</p>
      </div>
    </div>
  )
}
