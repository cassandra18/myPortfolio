import React from 'react';
import { FaCode, FaLaptopCode,  } from "react-icons/fa";
import { SiPeakdesign } from "react-icons/si";


const Card = ({ title, description, icon }) => {
    return (
        <div className='card'>
            <react-icon icon={icon} className="icon" />
            <h2>{title}</h2>
            <p>{ description }</p>
        </div>
    );
};

//SErvuces component to render multiple cards
export default function Services() {
    //Array of service data
    const services = [
        {
            title: 'Web Design',
            description: 'As a creative web designer, I provide tailored solutions to elevate your online presence. With an artistic flair and expertise in user experience design, I craft visually captivating websites that engage and inspire.From sleek portfolios to interactive e-commerce platforms, each project is meticulously designed to reflect your brand identity and captivate your audience. Let\'s collaborate to turn your vision into a stunning reality in the digital landscape.',
            icon: ''
        },
        {
            title: 'Software Development',
            description: `As a skilled software developer, I offer custom solutions to meet your digital needs.

            With proficiency in multiple programming languages and a focus on efficiency and scalability, I develop robust software applications that streamline processes and drive growth.
            
             Whether you require a desktop software, or complex backend system, I am committed to delivering high-quality solutions that empower your business to succeed in today's digital age.`,
            icon: '', // Example of using a Font Awesome icon name
        },
        {
            title: 'UI/UX Design',
            description: `I create seamless digital experiences that prioritize user satisfaction and engagement. I craft intuitive and visually appealing interfaces that delight users at every interaction. 

            From wireframing to prototyping, I leverage my creativity and technical skills to ensure every detail enhances the overall user experience. 
            
            Let's collaborate to transform your ideas into intuitive, user-centric designs that elevate your digital presence.`,
            icon: '', // Example of using a Font Awesome icon name
        },
    ];

  return (
    <section className='services'>
        {services.map(( service, index) => (
            <Card key={index} {...service} ></Card>
        ))}
    </section>
  )
};
