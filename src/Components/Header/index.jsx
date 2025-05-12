import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./styled.css";

const Header = ({ headerColor }) => {
  const location = useLocation();
  const isDetailPage = location.pathname.startsWith("/projects/");
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = (e) => {
    setMenuOpen((prev) => !prev);
  };

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    setMenuOpen(false); // 메뉴 닫기
    // document.body.classList.remove("m-no-scroll"); // 스크롤 다시 허용

    setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 300); // transition 끝나는 시간과 맞추기
  };

  // useEffect(() => {
  //   // 사이드메뉴 켜지면 스크롤 막기
  //   if (menuOpen) {
  //     document.body.classList.add("m-no-scroll");
  //   } else {
  //     document.body.classList.remove("m-no-scroll");
  //   }

  //   return () => {
  //     document.body.classList.remove("m-no-scroll");
  //   };
  // }, [menuOpen]);
  return (
    <>
      <header className={isDetailPage ? "header detail-header" : "header"}>
        <div className="logo-part">
          <a href="/" className="logo" style={{ color: headerColor }}>
            <span>HAN</span>
            <span>.</span>
          </a>
          <a href="/" className="home-text">
            HOME
          </a>
        </div>

        <button type="button" className="gnb" onClick={toggleMenu}>
          <FontAwesomeIcon
            className="hamburger"
            icon={faBars}
            style={{ color: headerColor }}
          />
        </button>

        <aside className={`aside-menu opacity ${menuOpen ? "open" : ""}`}>
          <ul className="menu-ul">
            <button type="button" className="x-mark" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faXmark} />
            </button>

            <li>
              <a href="/">HOME</a>
            </li>
            <li className={isDetailPage ? "d-none" : ""}>
              <a
                href="#section-about"
                onClick={(e) => handleScrollTo(e, "section-about")}
              >
                ABOUT
              </a>
            </li>
            <li className={isDetailPage ? "d-none" : ""}>
              <a
                href="#section-info"
                onClick={(e) => handleScrollTo(e, "section-info")}
              >
                INFORMATION
              </a>
            </li>
            <li>
              <a
                href="#section-Projects"
                onClick={(e) => handleScrollTo(e, "section-Projects")}
              >
                PROJECTS
              </a>

              <ul className="drop-menu">
                <hr />
                <span className="sub-a">WORK</span>
                <li>
                  <Link
                    to="/projects/social15"
                    onClick={() => setMenuOpen(false)}
                  >
                    - 소셜라우더 Ver1.5
                  </Link>
                </li>
                <li>
                  <Link
                    to="/projects/sociallouder"
                    onClick={() => setMenuOpen(false)}
                  >
                    - 소셜라우더
                  </Link>
                </li>
                <li>
                  <Link
                    to="/projects/landing"
                    onClick={() => setMenuOpen(false)}
                  >
                    - 마케팅 랜딩페이지
                  </Link>
                </li>
                <li>
                  <Link
                    to="/projects/wekeepT"
                    onClick={() => setMenuOpen(false)}
                  >
                    - WekeepT
                  </Link>
                </li>
                <li>
                  <Link to="/projects/fbw" onClick={() => setMenuOpen(false)}>
                    - FBW 솔루션
                  </Link>
                </li>
                <li>
                  <Link
                    to="/projects/tutoring"
                    onClick={() => setMenuOpen(false)}
                  >
                    - Tutoring Services
                  </Link>
                </li>
                <li>
                  <Link to="/projects/sns" onClick={() => setMenuOpen(false)}>
                    - 항해 SNS
                  </Link>
                </li>
                <hr />
              </ul>

              <ul className="drop-menu">
                <span className="sub-a">PERSONAL</span>
                <li>
                  <Link
                    to="/projects/mbtingI"
                    onClick={() => setMenuOpen(false)}
                  >
                    - MBTingI
                  </Link>
                </li>
                <li>
                  <Link to="/projects/nado" onClick={() => setMenuOpen(false)}>
                    - 나도먹방
                  </Link>
                </li>
                <li>
                  <Link to="/projects/chat" onClick={() => setMenuOpen(false)}>
                    - Socket Chat
                  </Link>
                </li>
                <hr />
              </ul>
            </li>
            <li className={isDetailPage ? "d-none" : ""}>
              <a
                href="#section-contact"
                onClick={(e) => handleScrollTo(e, "section-contact")}
              >
                CONTACT
              </a>
            </li>
          </ul>

          <div
            className={`menu-back opacity ${menuOpen ? "on" : ""}`}
            onClick={toggleMenu}
          ></div>
        </aside>
      </header>
    </>
  );
};

export default Header;
