import "./styled.css";

const SectionInfo = () => {
  return (
    <>
      <section id="section-info" className="section_02-2" data-color="#fff">
        <div className="inner_02" data-aos="fade-left" data-aos-duration="600">
          <div className="box">
            <h1 className="title" data-aos="fade-left" data-aos-duration="600">
              INFORMATION
            </h1>
            <div className="layout">
              <div
                className="sub-title"
                data-aos="fade-left"
                data-aos-duration="600"
              >
                Education
                <span> & </span>
                Certifications
              </div>

              <ul
                className="edu-ul"
                data-aos="fade-left"
                data-aos-duration="600"
              >
                <li>
                  <span>2022.08 ~ 2022.10</span>
                  <span>POSCO x CODINGOn 웹개발자 양성과정</span>
                </li>
                <li>
                  <span>2020.12 취득</span>
                  <span>웹디자인 기능사 - 한국산업인력공단</span>
                </li>
                <li>
                  <span>2020.07 ~ 2020.12</span>
                  <span>스마트 UI/UX디자인 & 웹퍼블리셔 양성과정</span>
                </li>
                <li>
                  <span>2008.03 ~ 2012.02</span>
                  <span>호서대학교 패션 (MD/VMD) 학과 졸업</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="section-info" className="section_02-3">
        <div className="inner_02">
          <div className="box">
            <h1 className="title" data-aos="fade-up" data-aos-duration="600">
              INFORMATION
            </h1>
            <div className="layout">
              <div
                className="sub-title"
                data-aos="fade-right"
                data-aos-duration="600"
              >
                Skill
                <span> & </span>
                Library
              </div>

              <div
                className="ul-box"
                data-aos="fade-left"
                data-aos-duration="600"
              >
                <ul>
                  <li>HTML5</li>
                  <li>JSP</li>
                  <li>PHP</li>
                  <li>CSS3</li>
                  <li>SCSS</li>
                  <li>Styled-Component</li>
                  <li>Javascript</li>
                  <li>JQuery</li>
                  <li>React</li>
                  <li>ReactNative</li>
                  <li>XD</li>
                  <li>Figma</li>
                  <li>illustrator</li>
                  <li>Photoshop</li>
                </ul>
                <ul>
                  <li>Chart.js</li>
                  <li>AOS</li>
                  <li>SwiperJs</li>
                  <li>FullcalendarJs</li>
                  <li>daterangepickerJs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionInfo;
