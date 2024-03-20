import React from "react";
import img1 from "../assets/img1.jpeg";
import { Link } from "react-router-dom";
import { FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";


export default function HeroSection() {
  return (
    <div className="py-28 px-16 m-auto">
      <div className="flex justify-between items-center">
        <div className="text-white md:w-1/2 leading-relaxed">
          <h1 className="text-4xl">Hello,</h1>
          <h1 className="text-4xl py-1">
            I'm <span className="text-orange-500">Cassandra...</span>
          </h1>

          <p className="py-4">
            I'm a passionate full-stack web developer with a strong foundation
            in software engineering. Armed with a certificate in software
            engineering, I've spent the past year and a half immersed in the
            dynamic world of web development, continuously expanding my skills
            and honing my craft. My journey is characterized by a relentless
            pursuit of growth and innovation, as I thrive on the challenges and
            opportunities that come with each project. With a keen eye for
            detail and a dedication to excellence, I strive to create intuitive,
            user-friendly solutions that leave a lasting impact. Let's build
            something remarkable together.
          </p>

          {/* social icons */}
          <div className="flex items-center justify-between w-28 py-5">
            {/* Twitter */}
            <a
              href="https://twitter.com/LelCassandra"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3"
            >
              <button className="icon-button" style={{ backgroundColor: "transparent", color: "#05FFC9"}}>
                <FaXTwitter size={24}  />
              </button>
            </a>

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

          <div className="flex flex-col md:flex-row items-center mt-4">
        <a href="" target="_blank" rel="noopener noreferrer">
        <button className="p-2 px-4 rounded-full mr-4">Download CV</button>
      
          </a>
      <a className="green-color" 
      href="https://docs.google.com/document/d/e/2PACX-1vRSGhgMsSMLUeIXwi6ZfE5GEY1KjPg4Y6pqM4feBo_KEhQzznbdh_NVheEDMVMMcw/pub"
      target="_blank"
      rel="noopener noreferrer">See experience
      </a>
      </div>

        </div>

        <div className="md:w-1/2 relative">
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <div
              className="w-3/5 h-full mt-10 transform rotate-45 rounded-full"
              style={{
                marginLeft: "auto",
                backgroundImage: "linear-gradient(45deg, #F24E1E, #F24E1E)",
                boxShadow: "0 0 200px rgb(245, 78, 30)",
              }}
            ></div>
          </div>

          <img
            src={img1}
            alt="Cassandra Lelei image "
            className="w-3/5 mt-10 "
            style={{
              borderRadius: "40%",
              marginLeft: "auto",
              position: "relative",
              zIndex: 1,
            }}
          />
        </div>
      </div>
      {/* 
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-br from-orange-500 to-green-500 opacity-50"></div>
      </div>
       */}

    </div>
  );
}
