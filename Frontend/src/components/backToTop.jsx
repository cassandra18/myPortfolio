import { FaArrowCircleUp } from "react-icons/fa";

const BackToTop = () => {
  const scrollToTop = () => {
    console.log("scroll to top")
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="fixed bottom-4 right-4 cursor-pointer text-white">
      <FaArrowCircleUp onClick={scrollToTop} size={32} />
    </div>
  );
};

export default BackToTop;
QSEDF