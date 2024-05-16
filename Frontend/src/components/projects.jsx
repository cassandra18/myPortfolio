import React, { useState } from "react";

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(null);

  const images = [
    {
      src: 'images/img3.png',
      title: "SingleBlog",
      description: "This is the view of the single blog page in medium devices",
    },
    {
      src: 'images/img2.png',
      title: " Dashboard",
      description: "This is the view of the dashboard in medium devices",
    },
    {
      src: '/images/img1.png',
      title: " Herosection",
      description: "This is the view of the landing page in medium devices",
    },
    {
      src: 'images/img4.png',
      title: "AllBlogs",
      description:
        "This is the view of the all-blogs page in small devices with the navbar opened",
    },
    {
      src: 'images/img5.png',
      title: "Contact",
      description:
        "This is the view of the contact page in medium devices",
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

      <div className="w-full h-full flex items-center justify-center px-2 py-10">
        <div className="flex items-center overflow-x-auto  gap-4 slider-images">
          {images.map((image, index) => (
            <div
              key={index}
              className={`slider-img ${activeIndex === index ? 'active' : ''}`}
              onClick={() => handleImageClick(index)}
            >
              <img src={image.src} alt={image.title} />
              <h1 className="image-h1">{image.title}</h1>
              <div className="details">
                <h2>{image.title}</h2>
                <p>{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
