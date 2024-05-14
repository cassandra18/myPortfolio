import React from 'react'
import { IoArrowUpCircleOutline } from "react-icons/io5";


export default function BackToTop() {
    const scrollToSection = (e, id) => {
        e.preventDefault();
        const element = document.querySelector(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      };

  return (
    <div>
      <a
        onClick={(e) => {
          scrollToSection(e, "#home");
        }}
        className="fixed bottom-5 right-2 green-color rounded-full hover:scale-90 transition ease-in-out duration-200 cursor-pointer "
      >
        <IoArrowUpCircleOutline className="md:text-4xl text-2xl" />
      </a>
    </div>
  )
}
