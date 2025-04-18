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
  }, []);

  return (
    <>
      <div className="wrapper">
        <SectionIntro />

        <div className="sticky-wrap">
          <SectionAbout setHeaderColor={setHeaderColor} />
          <SectionInfo />
        </div>

        <SectionProjects />

        <SectionContact setHeaderColor={setHeaderColor} />
      </div>
    </>
  );
};

export default Home;
