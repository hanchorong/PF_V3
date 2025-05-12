import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";
import SectionIntro from "../../Components/SectionIntro";
import SectionAbout from "../../Components/SectionAbout";
import SectionInfo from "../../Components/SectionInfo";
import SectionProjects from "../../Components/SectionProjects";
import SectionContact from "../../Components/SectionContact";

const Home = ({ setHeaderColor }) => {
  useEffect(() => {
    AOS.init();

    let currentColor = "#19a661";
    const observer = new IntersectionObserver(
      (entries) => {
        let isAnyIntersecting = false;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const newColor = entry.target.dataset.color;
            if (newColor && newColor !== currentColor) {
              currentColor = newColor;
              setHeaderColor(newColor);
            }
            isAnyIntersecting = true;
          }
        });

        if (!isAnyIntersecting) {
          setHeaderColor("#19a661"); // 기본색으로 복귀
          currentColor = "#19a661";
        }
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll("section[data-color]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [setHeaderColor]);

  return (
    <>
      <div className="wrapper">
        <SectionIntro />

        <SectionAbout />
        <div className="sticky-wrap">
          <SectionInfo />
        </div>

        <SectionProjects />

        <SectionContact />
      </div>
    </>
  );
};

export default Home;
