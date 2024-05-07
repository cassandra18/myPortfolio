import React, { useState, useEffect } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      console.log("toggling");
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    const heroSection = document.getElementById("hero-section");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {isVisible && (
        <div
          className="fixed bottom-4 right-4 cursor-pointer text-white"
          onClick={scrollToTop}
        >
          <FaArrowCircleUp size={32} />
        </div>
      )}
    </div>
  );
};

export default BackToTop;
