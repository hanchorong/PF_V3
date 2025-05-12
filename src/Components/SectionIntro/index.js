import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import "./styled.css";

const SectionIntro = () => {
  return (
    <>
      <section className="section_01" id="section-home">
        <div className="inner_01">
          <nav className="home-nav">
            <ul>
              <li>
                <a href="#section-about">
                  ABOUT
                  <FontAwesomeIcon
                    icon={faArrowDown}
                    style={{
                      color: "#fff",
                      fontSize: "20px",
                    }}
                  />
                </a>
              </li>
              <li>
                <a href="#section-info">
                  INFORMATION
                  <FontAwesomeIcon
                    icon={faArrowDown}
                    style={{
                      color: "#fff",
                      fontSize: "2rem",
                    }}
                  />
                </a>
              </li>
              <li>
                <a href="#section-Projects">
                  PROJECTS
                  <FontAwesomeIcon
                    icon={faArrowDown}
                    style={{
                      color: "#fff",
                      fontSize: "2rem",
                    }}
                  />
                </a>
              </li>
              <li>
                <a href="#section-contact">
                  CONTACT
                  <FontAwesomeIcon
                    icon={faArrowDown}
                    style={{
                      color: "#fff",
                      fontSize: "2rem",
                    }}
                  />
                </a>
              </li>
            </ul>
          </nav>

          <article className="home-article">
            안녕하세요, <br className="row-br" /> 방문해 주셔서 감사합니다!
            <br /> <b>웹 퍼블리셔 한초롱</b>의<br className="row-br" />{" "}
            <b>react 버전 </b>
            포트폴리오 입니다.
          </article>

          <div className="mouse-down-container">
            <div className="back-box"></div>
            <DotLottieReact
              src="https://lottie.host/1c537d26-f30b-4967-9b89-ad340b07c2cf/Xy5t8cmILd.lottie"
              loop
              autoplay
              className="mouse-down-icon"
            />
          </div>
        </div>

        <div className="bottom-text">PORTFOLIO.</div>
      </section>
    </>
  );
};

export default SectionIntro;
