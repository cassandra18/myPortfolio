import React from "react";
import { FaCode, FaLaptopCode } from "react-icons/fa";
import { SiPeakdesign } from "react-icons/si";

const Card = ({ title, description, icon:Icon }) => {
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
      <p className="text-white px-3 py-2 leading-relaxed ">{description}</p>
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
        "As a creative web designer, I provide tailored solutions to elevate your online presence. With an artistic flair and expertise in user experience design, I craft visually captivating websites that engage and inspire.From sleek portfolios to interactive e-commerce platforms, each project is meticulously designed to reflect your brand identity and captivate your audience. Let's collaborate to turn your vision into a stunning reality in the digital landscape.",
      icon: FaLaptopCode,
    },
    {
      title: "Software Development",
      description: `As a skilled software developer, I offer custom solutions to meet your digital needs.

            With proficiency in multiple programming languages and a focus on efficiency and scalability, I develop robust software applications that streamline processes and drive growth.
            
             Whether you require a desktop software, or complex backend system, I am committed to delivering high-quality solutions that empower your business to succeed in today's digital age.`,
      icon: FaCode,
    },
    {
      title: "UI/UX Design",
      description: `I create seamless digital experiences that prioritize user satisfaction and engagement. I craft intuitive and visually appealing interfaces that delight users at every interaction. 

            From wireframing to prototyping, I leverage my creativity and technical skills to ensure every detail enhances the overall user experience. 
            
            Let's collaborate to transform your ideas into intuitive, user-centric designs that elevate your digital presence.`,
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
            <Card key={index} {...service} />
          ))}
        </section>
      </div>
    </>
  );
}
