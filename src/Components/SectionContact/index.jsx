import Footer from "../../Components/Footer";
import "./styled.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const SectionContact = () => {
  return (
    <>
      <section
        className="section_04"
        id="section-contact"
        data-color="#fff"
        data-aos="fade-up"
        data-aos-duration="600"
      >
        <div className="inner_04">
          <h1 className="title">CONTACT</h1>

          <div className="middle">
            <article>
              저의 포트폴리오를 끝까지 봐주셔서 감사합니다.
              <br /> 함께 일할 사람을 찾고 계신다면 연락해 주세요 😊
            </article>
            <p className="info-list">
              <FontAwesomeIcon icon={faLocationDot} /> 서울시 동작구 사당동
            </p>
            <a
              className="info-list"
              href="https://github.com/hanchorong"
              target="_blank"
            >
              <FontAwesomeIcon icon={faGithub} />
              <u>Github</u>
            </a>
            <a className="info-list mail" href="mailto:hancrong@gmail.com">
              <FontAwesomeIcon icon={faPaperPlane} />
              hancrong@gmail.com
            </a>
          </div>
          <Footer />
        </div>
      </section>
    </>
  );
};
export default SectionContact;
