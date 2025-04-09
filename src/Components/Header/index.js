import "./styled.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = ({ headerColor }) => {
  return (
    <>
      <header className="header">
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
          <a href="/" class="home-text">
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
              <a href="/">Work</a>
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
