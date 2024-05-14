import React from "react";
import img2 from "../assets/img2.jpeg";

export default function About() {
  return (
    <>
     <h1 id="about" className="text-4xl text-white md:mt-12 mt-20 font-bold text-center">
              About <span className="text-orange-500">Me</span>
            </h1>
    <div className="md:px-16 px-8 mx-auto mb-12 md:mb-32 mt-12">
      
      <div className="flex flex-col md:flex-row justify-between gap-8 ">
        
        <div className="md:w-3/4 relative flex  items-center ">
          <div className="absolute  w-full h-full flex justify-center items-center">
            <div
              className=""
              style={{
                width: "80%",
                height: "100%",
                rotate: "10deg",
                marginTop: "auto",
                backgroundImage: "linear-gradient(180deg, #F24E1E,  #D94CBEff)",
                boxShadow: "0 0 200px rgba(217, 76, 190, 1)",
                borderRadius: "40%",
                
              }}
            ></div>
          </div>

          <img
            src={img2}
            alt="Cassandra Lelei"
            className=""
            style={{
              width: "80%",
              marginLeft: "auto",
              marginRight: "auto",
              borderRadius: "40%",
              position: "relative",
              zIndex: 1,
            }}
          />
        </div>
        
       
        <div className="text-white leading-relaxed w-full">
          <div>
           
            <p className="py-4 ">
            As a web developer, software developer and UI/UX designer, I strive to craft user-friendly and visually appealing applications. 
            <br></br>
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
    </>
  );
}