import proj1 from "./../../Assets/images/social2/influ-modal.webp";
import "./styled.css";

const SectionProjects = ({}) => {
  return (
    <>
      <section id="section-Projects" className="section_03">
        <div className="inner_03">
          <h1 className="title">PROJECTS</h1>

          <div className="Projects-container">
            <div className="tab-buttons">
              <button className="on">Work</button>
              <button>Personal</button>
            </div>

            <div className="list-container">
              <div className="list">
                <div className="left-part">
                  <img src={proj1} alt="sociallouder ver1.5 thumbnail"></img>
                </div>
                <div className="right-part">
                  <ul>
                    <li>작업영역: 퍼블리싱 100%</li>
                    <li>
                      PHP / scss / jquery / swiperJS / AOS / FullCalendarJS /
                      DateRangePickerJS / ChartJS
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default SectionProjects;
