import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./styled.css";

const Header = ({ headerColor }) => {
  const location = useLocation();

  const isDetailPage = location.pathname.startsWith("/projects/");
  return (
    <>
      <header className={isDetailPage ? "header detail-header" : "header"}>
        <div className="logo-part">
          <a href="/" className="logo">
            <span
              style={{
                color: headerColor,
              }}
            >
              HAN
            </span>
            <span
              style={{
                color: headerColor,
              }}
            >
              .
            </span>
          </a>
          <a href="/" className="home-text">
            HOME
          </a>
        </div>

        <div className="gnb opacity">
          <FontAwesomeIcon
            className="hamburger"
            icon={faBars}
            style={{
              color: headerColor,
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
              <a href="/">Projects</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
