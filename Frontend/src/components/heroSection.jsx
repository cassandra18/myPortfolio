import React, { useEffect } from "react";
import img1 from "../assets/img1.jpeg";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

// Register the TextPlugin
gsap.registerPlugin(TextPlugin);

export default function HeroSection() {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="home"
      className="md:mt-28 mt-12  px-8 lg:py-16 md:px-16 mx-auto flex flex-col-reverse items-center md:flex-row"
    >
      <div className="text-white md:w-2/3 leading-relaxed lg:pt-10 md:pr-10">
        <h2 className="md:text-4xl text-2xl py-1 text-gray-300 ">
          Hello, I'm <span className="text-orange-500">Cassandra...</span>
        </h2>
        <h1 className="md:text-4xl text-2xl font-bold text-gray-300">A Software Developer</h1>
        <p id="home" className="py-4 md:text-lg text-gray-400">
          Hey there! I’m a full-stack web developer and designer who thrives on
          turning imaginative ideas into seamless digital experiences. From
          crafting clean user interfaces to building powerful backend systems, I
          bring both code and creativity to the table.
          <br />
          <br />
          Over the past two and a half years, I’ve immersed myself in the world
          of software development, web design, and graphic creation—learning,
          building, breaking things (on purpose!), and figuring out how to make
          them better. I believe great digital experiences aren’t just about
          functionality—they’re about how people *feel* when they use what
          you’ve built.
          <br />
          <br />
          I care deeply about writing clean, efficient code, designing intuitive
          user journeys, and collaborating with awesome people to bring big
          ideas to life. Whether you’re starting something new or refining
          something that already exists, I’m here to help make it bold,
          beautiful, and uniquely yours.
          <br />
          <br />
          So, whether you’ve got a brilliant concept or just a napkin sketch,
          let’s build something that turns heads and makes users smile. Bonus
          points if you like dark mode and terrible puns.
        </p>

        <div className="flex flex-row justify-center md:justify-start items-center mt-7 py-2 md:bg-transparent">
          <a
            href="#contact"
            onClick={(e) => {
              scrollToSection(e, "#contact");
            }}
          >
            <button className="py-1 md:py-2  px-4 rounded-full mr-4">
              Hire Me
            </button>
          </a>
          <a
            className="green-color pt-2"
            href="#projects"
            onClick={(e) => {
              scrollToSection(e, "#projects");
            }}
          >
            See my work
          </a>
        </div>
      </div>

      <div className="md:w-1/2 relative mt-10 md:mt-0 lg:mt-10 flex justify-center items-center  mb-10">
        <div
          className="absolute  w-1/2 h-full rounded-full flex justify-center items-center"
          style={{
            rotate: "45deg",
            backgroundImage: "linear-gradient(45deg, #F24E1E, #F24E1E)",
            boxShadow: "0 0 200px rgb(245, 78, 30, 0.5)",
            opacity: 0.8,
          }}
        ></div>

        <img
          src={img1}
          alt="Cassandra Lelei image"
          className="w-1/2 "
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
