import React, { useState } from "react";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(null);

  const projects = [
    {
      title: "Herosection",
      description: "This is the landing page of a blogging website I created.",
      image: "/images/img1.png",
      link: "https://cassys-web.vercel.app/",
    },
    {
      title: "Herosection",
      description:
        "This is the landing page of a school website I created for CBC Kericho school.",
      image: "/images/cbc-kericho.png",
      link: "https://work-orcin-delta.vercel.app/",
    },
    {
      title: "Herosection",
      description:
        "This is the landing page of a school website I created for Lelann bookshop.",
      image: "/images/lelann-bookshop.png",
      link: "https://lelann-bookshop-5gjtav0jk-cassandra18s-projects.vercel.app/",
    },
  ];

  const handleImageClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="relative mb-20 px-4">
      <h1 className="text-4xl text-center text-white font-bold mt-12 mb-8">
        Latest <span className="text-orange-500">Projects</span>
      </h1>

      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3" id="projects">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/5 p-6 rounded-xl shadow-md hover:shadow-orange-400/40 transition duration-300 cursor-pointer"
            onClick={() => handleImageClick(index)}
          >
            <img
              src={project.image}
              alt={project.title} 
              loading="lazy"
              className="w-full h-56 object-cover rounded-md mb-4"
            />
            <h2
              className="text-white text-xl font-semibold mb-2"
              style={{ color: "#05FFC9" }}
            >
              {project.title}
            </h2>
            <p className="text-gray-300 text-lg mb-3">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 hover:text-orange-200 underline "
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
