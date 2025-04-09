import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import "./Home.css";
import SectionIntro from "../../Components/SectionIntro";
import SectionAbout from "../../Components/SectionAbout";
import SectionInfo from "../../Components/SectionInfo";
import SectionProjects from "../../Components/SectionProjects";

const Home = ({ setHeaderColor }) => {
  const greenSectionRef = useRef(null);

  useEffect(() => {
    AOS.init();
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderColor("#fff");
        } else {
          setHeaderColor("#19a661");
        }
      },
      { threshold: 0.5 }
    );

    if (greenSectionRef.current) {
      observer.observe(greenSectionRef.current);
    }

    return () => observer.disconnect();
  }, [setHeaderColor]);

  return (
    <>
      <div className="wrapper">
        <SectionIntro />

        <div className="sticky-wrap">
          <SectionAbout ref={greenSectionRef} />

          <SectionInfo />
        </div>

        <SectionProjects />
      </div>
    </>
  );
};

export default Home;
