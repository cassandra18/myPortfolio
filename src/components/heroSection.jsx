import React from "react";
import img1 from "../assets/img1.jpeg";
import { Link } from "react-router-dom";
import { FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";

export default function HeroSection() {
  return (
    <div className="py-32 px-16 m-auto">
      <div className="flex justify-between items-center">
        <div className="text-white md:w-1/2 leading-relaxed">
          <h3 className="text-2xl">Hello,</h3>
          <h2 className="text-4xl py-1" id="home">
            I'm <span className="text-orange-500">Cassandra...</span>
          </h2>
          <h1 className="text-4xl font-bold">A Software Developer</h1>
          <p id="home" className="py-4">
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


          <div className="flex flex-col md:flex-row items-center mt-10">
            <a href="" target="_blank" rel="noopener noreferrer">
              <button className="py-2 px-4 rounded-full mr-4">Hire Me </button>
            </a>
            <a
              className="green-color"
              href="https://docs.google.com/document/d/e/2PACX-1vR4g6gWAvgmdcRca5oJevuZ0VDw8oasWN2q3F7D9Z-87dV2mbpedDxSP1nf7h7dYkNnKCFSoNpg704x/pub"
              target="_blank"
              rel="noopener noreferrer"
            >
              See experience
            </a>
          </div>
        </div>

        <div className="md:w-1/2 relative ">
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
