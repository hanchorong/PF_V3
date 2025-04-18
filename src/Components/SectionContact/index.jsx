import { useEffect, useRef } from "react";
import Footer from "../../Components/Footer";
import "./styled.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const SectionContact = ({ setHeaderColor }) => {
  const greenSectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderColor("#fff");
        } else {
          setHeaderColor("#19a661");
        }
      },
      { threshold: 0 }
    );

    if (greenSectionRef.current) {
      observer.observe(greenSectionRef.current);
    }

    return () => observer.disconnect();
  }, [setHeaderColor]);
  return (
    <>
      <div
        className="hidden-div"
        id="section-contact"
        ref={greenSectionRef}
      ></div>
      <section className="section_04">
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
