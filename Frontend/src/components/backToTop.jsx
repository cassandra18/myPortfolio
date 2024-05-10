import React, { useState, useEffect } from "react";
import { FaArrowCircleUp, FaLeaf } from "react-icons/fa";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const toggleVisibility = () => {
      if (div.scrollTop > 50) { 
        
        setIsVisible(false);
      } else {
        setIsVisible(false);
      }
     
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []); 

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  console.log(document.documentElement.scrollTop) 
  return (
    <div>
      {isVisible && (
        <div
          className="fixed bottom-4 right-4 cursor-pointer green-color z-10"
          onClick={scrollToTop}
        >
          <FaArrowCircleUp size={32} />
        </div>
      )}
      
    </div>
  );
};

export default BackToTop;
