import React from "react";
import img2 from "../assets/img2.jpeg";

export default function About() {
  return (
    <div className="px-16 m-auto mb-36 mt-12">
      <div className="flex justify-between gap-12 items-center">
        
        <div className=" relative ">
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
            <div
              className=" mt-10 transform  rounded-full"
              style={{
                width: "75%",
                height: "100%",
                rotate: "5deg",
                marginTop: "auto",
                backgroundImage: "linear-gradient(180deg, #F24E1E,  #D94CBEff)",
                boxShadow: "0 0 200px rgba(217, 76, 190, 1)"
              }}
            ></div>
          </div>

          <img
            src={img2}
            alt="Cassandra Lelei"
            className=""
            style={{
              width: "70%",
              marginLeft: "auto",
              marginRight: "auto",
              borderRadius: "38%",
              position: "relative",
              zIndex: 1,
            }}
          />
        </div>
        
       
        <div className="text-white leading-relaxed w-full">
          <div>
            <h1 id="about" className="text-4xl font-bold">
              About <span className="text-orange-500">Me</span>
            </h1>
           
            <p className="py-4 ">
            I'm a passionate software developer with a love for life, music, and creativity. 
            I find fulfillment in both the technical aspects of coding and the artistic side of design. 
            As a web developer and UI/UX designer, I strive to craft user-friendly and visually appealing experiences. 
            Being a mother to a wonderful daughter brings immense joy to my life, and her constant energy inspires me to keep learning and growing. 
            Currently, I'm expanding my skillset by venturing into the world of mobile app creation, eager to bring user-centered design to the palm of people's hands.
            <br></br>
            To know more about me, click <a href="https://docs.google.com/document/d/e/2PACX-1vRJ1t5MqIrz8LBlikGzM0SsQUGFmUvIoc0uRNeWsQzIZIRX_Mgs0GGSU3lnAMEJeT_raqbM-05Htbuh/pub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500">here</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
