import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import "./styled.css";

const ScrollTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;
      setIsVisible(scrolled + 500 > windowHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <button
        className={`scrollTopBtn opacity ${isVisible ? "btnVisible" : ""}`}
        type="button"
        onClick={scrollToTop}
        aria-label="맨 위 스크롤"
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
    </>
  );
};

export default ScrollTopButton;
