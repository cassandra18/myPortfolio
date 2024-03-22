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
            description: 'Description of Service 2',
            icon: 'code', // Example of using a Font Awesome icon name
        },
        {
            title: 'UI/UX Design',
            description: 'Description of Service 3',
            icon: 'rocket', // Example of using a Font Awesome icon name
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
