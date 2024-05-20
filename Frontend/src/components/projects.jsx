import React, { useState } from "react";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(null);

  const images = [
    {
      src: "images/img3.png",
      title: "SingleBlog",
      description: "This is the view of the single blog page in medium devices",
    },
    {
      src: "images/img2.png",
      title: " Dashboard",
      description: "This is the view of the dashboard in medium devices",
    },
    {
      src: "/images/img1.png",
      title: " Herosection",
      description: "This is the view of the landing page in medium devices",
    },
    {
      src: "images/img4.png",
      title: "AllBlogs",
      description:
        "This is the view of the all-blogs page in small devices with the navbar opened",
    },
    {
      src: "images/img5.png",
      title: "Contact",
      description: "This is the view of the contact page in medium devices",
    },
  ];

  const handleImageClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="relative mb-20 ">
      <h1 className="text-4xl text-center text-white px-8 font-bold mt-12 mb-8">
        Latest <span className="text-orange-500">Project</span>
      </h1>

      <div className="grid gap-8">
        <div className="w-full h-full flex flex-col  items-center justify-center px-6 py-10">
          <a
            href="https://cassys-web.vercel.app/"
            target="_blank"
            className="green-color text-xl  mb-8 visited:text-purple-700"
          >
            Link to MyBlogs project page
          </a>
          <div className="flex items-center  gap-2 md:gap-2 slider-images">
            {images.map((image, index) => (
              <div
                key={index}
                className={`slider-img ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => handleImageClick(index)}
              >
                <img src={image.src} alt={image.title} />
                <div className="details">
                  <h2>{image.title}</h2>
                  <p>{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
