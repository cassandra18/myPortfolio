import React from "react";
import img1 from "../assets/img1.jpeg";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <div className="py-32 px-16 relative">
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
        </div>

        <div className="md:w-1/2 flex">        
          <img
              src={img1}
              alt="Cassandra Lelei image "
              className="w-1/2 "
              style={{ borderRadius: "40%", marginLeft: "auto"  }}
          />
        </div>
      </div>
{/* 
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-br from-orange-500 to-green-500 opacity-50"></div>
      </div>
       */}
      <div className="flex flex-col md:flex-row items-center mt-4">
        <button className="p-2 px-4 rounded-full mr-4">Download CV</button>

        <Link className="green-color mt-2 md:mt-0">See experience</Link>
      </div>
    </div>
  );
}
