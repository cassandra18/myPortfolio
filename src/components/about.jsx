import React from "react";
import img2 from "../assets/img2.jpeg";

export default function About() {
  return (
    <div>
      <div className="md:w-3/5  relative">
        <img src={img2} alt="Cassandra Lelei" className="w-3/5 h-auto max-w-full mt-10 " 
        style={{
            borderRadius: "40%",
            marginLeft: "auto",
            position: "relative",
            zIndex: 1,
          }}/>
      </div>

      <div>
        <h1 id="about">
          About <span className="text-orange-500">Me</span>
        </h1>
        <h2>Software developer</h2>
        <p>
          I am a full-stack web developer with a passion for building innovative
          and user-friendly applications. I have the ability to work
          independently and as part of a team to deliver high-quality projects.
          Skilled in C, Python, HTML, CSS, JavaScript, Node.js, Express.js,
          MongoDB, MySQL, PostgreSQL, Typescript, NextJS, Vite and React.
        </p>
      </div>
    </div>
  );
}
