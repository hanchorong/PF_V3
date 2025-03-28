import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Home = () => {
  return (
    <>
      <div className="wrapper">
        <header className="header">
          <div className="logo-part">
            <a href="/" className="logo">
              <span>HAN</span>
              <span>.</span>
            </a>
            <a href="/" class="home-text">
              HOME
            </a>
          </div>

          <div className="gnb opacity">
            <FontAwesomeIcon
              className="hamburger"
              icon={faBars}
              style={{
                color: "#3261ec",
                fontSize: "2rem",
              }}
            />

            <ul>
              <li className="opacity">
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Information</a>
              </li>
              <li>
                <a href="/">Work</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>
        </header>

        <section class="section_01">
          <div className="inner_01">
            <nav class="home-nav">
              <ul>
                <li>
                  <a href="/">
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
                  <a href="/">
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
                  <a href="/">
                    WORK
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
                  <a href="/">
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

            <article class="home-article">
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
                className="mouse-down"
              />
            </div>
          </div>

          <div className="bottom-text">PORTFOLIO.</div>
        </section>
      </div>
    </>
  );
};

export default Home;
