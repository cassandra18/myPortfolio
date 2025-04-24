import React from "react";
import img2 from "../assets/pic2.jpg";

export default function About() {
  return (
    <>
      <h1
        id="about"
        className="text-4xl text-white md:mt-12 mt-20 font-bold text-center"
      >
        About <span className="text-orange-500">Me</span>
      </h1>
      <div className="md:px-16 px-8 mx-auto mb-12 md:mb-32 mt-12">
        <div className="flex flex-col md:flex-row justify-between  items-center gap-8 ">
          <div className="md:w-3/4 relative  hidden md:flex justify-center items-center mx-auto py-10">
            {/* Glowing Gradient Background */}
            <div
              className="absolute w-[360px] h-[360px] rounded-[40%] z-0"
              style={{
                backgroundImage: "linear-gradient(45deg, #F24E1E, #F24E1E)",
                boxShadow: "0 0 200px rgba(242, 78, 30)",
                rotate: "45deg",
              }}
            ></div>

            {/* Profile Image */}
            <img
              src={img2}
              alt="Cassandra Lelei"
              className="relative z-10 w-full max-w-sm rounded-[20%]"
              style={{
                height: "400px",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />
          </div>

          <div className="text-gray-400 md:text-lg  leading-relaxed w-full">
            <div>
              <p className="py-4">
                I wear many hats—web developer, software developer, UI/UX
                designer, and yes, an electrical engineer too (because why
                settle for one cool title when you can have several?). I’ve
                always been drawn to the intersection of technology and
                creativity—where logic meets design and where code turns into
                something people actually *enjoy* using.
                <br />
                <br />
                My journey started with wires, circuits, and the world of
                electrical systems, which taught me how to think critically,
                solve complex problems, and stay calm when things spark
                (literally). Over time, I found myself falling in love with
                building digital systems too—ones that light up the screen
                instead of just the room. Now, I blend the structure of
                engineering with the art of design to craft intuitive,
                user-friendly, and visually engaging web applications.
                <br />
                <br />
                From designing beautiful interfaces that feel effortless to
                navigate, to writing clean, scalable code that performs behind
                the scenes, I aim to build digital products that are as smart as
                they are stunning. I'm also a firm believer in the power of
                thoughtful design and good storytelling—because at the end of
                the day, users don’t just want tools, they want experiences.
                <br />
                <br />
                I’m currently diving deeper into the world of mobile app
                development, excited by the idea of putting purposeful design
                and functionality right into the hands of users. I thrive in
                collaborative environments, communicate clearly, adapt quickly,
                and bring a sense of curiosity and enthusiasm to every project I
                take on.
                <br />
                <br />
                If you're looking for someone who can build, design, debug, and
                maybe even explain it all with a smile (and a well-timed meme),
                I'm your person. Let’s make something awesome together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
