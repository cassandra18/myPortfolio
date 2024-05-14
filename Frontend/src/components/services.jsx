import React from "react";
import { FaCode, FaLaptopCode } from "react-icons/fa";
import { SiPeakdesign } from "react-icons/si";

const Card = ({ title, description, icon:Icon }) => {
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div style={{ 
        // border: "1px solid #EF6D09",
        borderRadius: "5px",
        border: "double 1px transparent",
        backgroundImage: "linear-gradient(#051120, #051120), linear-gradient(to bottom,  #EF6D09, #05FFC9)",
        backgroundOrigin: "border-box",
        backgroundClip: "content-box, border-box",
        
       
     }}>
      <div className="text-4xl green-color py-2 flex justify-center" style={{textAlign: "center"}}>
        <Icon />
      </div>
      <h1 className="text-center text-xl font-bold py-2">
        <span className="text-white">{title.split(' ')[0]}</span>{' '}
        <span className="text-orange-500">{title.split(' ').slice(1).join(' ')}</span>
        </h1>
      <p className="text-white px-3 pb-3 leading-relaxed ">{description}</p>
      <a  className="flex justify-center my-6" onClick={(e) => { scrollToSection(e, '#contact')}}>
            <button className="md:py-1  px-4 rounded-full mr-4  text-bold" style={{ boxShadow: "0 0 5px #05FFC9, 0 0 5px #05FFC9, 0 0 5px #05FFC9, 0 0 10px #05FFC9",}}>
              Hire Me
            </button>
          </a>
    </div>
  );
};

//SErvuces component to render multiple cards
export default function Services() {
  //Array of service data
  const services = [
    {
      title: "Web Design",
      description:
        "As a creative web designer, I provide tailored solutions to elevate your online presence. \nFrom sleek portfolios to interactive e-commerce platforms, each project is meticulously designed to reflect your brand identity and captivate your audience.",
      icon: FaLaptopCode,
    },
    {
      title: "Software Development",
      description: `With proficiency in multiple programming languages and a focus on efficiency and scalability, I develop robust software applications that streamline processes and drive growth.
            
             Get quality solutions that empower your business to succeed in today's digital age.`,
      icon: FaCode,
    },
    {
      title: "UI/UX Design",
      description: `I create seamless digital experiences that prioritize user satisfaction. I craft intuitive and visually appealing interfaces that delight users at every interaction. 

           Let's transform your ideas into intuitive, user-centric designs that elevate your digital presence.`,
      icon: SiPeakdesign  ,
    },
  ];

  return (
    <>
      <div className="md:px-16 px-8 m-auto mb-28">
        <h1 id="services" className="text-white text-4xl my-16 text-center font-bold">
          My <span className="text-orange-500">Services</span>
        </h1>
        <section className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8  ">
          {services.map((service, index) => (
            <Card key={index} {...service}
             />
          ))}
          
        </section>
      </div>
    </>
  );
}
