import React, { useEffect } from "react";
import img1 from "../assets/img1.jpeg";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

// Register the TextPlugin
gsap.registerPlugin(TextPlugin);

export default function HeroSection() {
  // useEffect(() => {
  //   console.log("Animating text...");
  //   gsap.from(".typed-text", {
  //     duration: 5.5,
  //     text: {
  //       value: "Software Developer",
  //       delimiter: ""
  //     },
  //     ease: "power1.inOut"
  //   });
  // }, []);

  return (
    <div
      id="home"
      className="md:mt-28 mt-12  px-8 lg:py-16 md:px-16 mx-auto flex flex-col-reverse items-center md:flex-row"
    >
      <div className="text-white md:w-2/3 leading-relaxed lg:pt-10 md:pr-10">
        <h2 className="md:text-4xl text-2xl py-1 ">
          Hello, I'm <span className="text-orange-500">Cassandra...</span>
        </h2>
        <h1 className="md:text-4xl text-2xl font-bold">Software Developer</h1>
        <p id="home" className="py-4">
          A passionate full-stack web developer and designer with a strong
          foundation in software engineering. Armed with a certificate in
          software engineering, I've spent the past year and a half immersed in
          the dynamic world of web development, graphic design and software
          development. Let's build something remarkable together.
        </p>

        <div className="flex flex-row justify-center md:justify-start items-center mt-7 py-2 md:bg-transparent">
          <a href="" target="_blank" rel="noopener noreferrer">
            <button className="py-1 md:py-2  px-4 rounded-full mr-4">
              Hire Me{" "}
            </button>
          </a>
          <a
            className="green-color pt-2"
            href="https://docs.google.com/document/d/e/2PACX-1vR4g6gWAvgmdcRca5oJevuZ0VDw8oasWN2q3F7D9Z-87dV2mbpedDxSP1nf7h7dYkNnKCFSoNpg704x/pub"
            target="_blank"
            rel="noopener noreferrer"
          >
            See experience
          </a>
        </div>
      </div>

      <div className="md:w-1/2 relative mt-10 md:mt-0 lg:mt-10 flex justify-center items-center  mb-10">
        <div
          className="absolute  w-2/3 h-full rounded-full flex justify-center items-center"
          style={{
            rotate: "45deg",
            backgroundImage: "linear-gradient(45deg, #F24E1E, #F24E1E)",
            boxShadow: "0 0 200px rgb(245, 78, 30)",
          }}
        ></div>

        <img
          src={img1}
          alt="Cassandra Lelei image"
          className="w-3/5 "
          style={{
            borderRadius: "44%",
            position: "relative",
            zIndex: 1,
          }}
        />
      </div>
    </div>
  );
}
