import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../../Data/projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faCheck } from "@fortawesome/free-solid-svg-icons";
import "./styled.css";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Footer from "../../Components/Footer";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <p>프로젝트를 찾을 수 없습니다.</p>;
  return (
    <>
      <div className="detail-wrap">
        <div className="detail-inner">
          <div className="detail-main">
            <Swiper
              modules={[Navigation, Pagination]}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
            >
              {project.swiper.map((img, index) => (
                <SwiperSlide key={index}>
                  <div className="slide">
                    <img src={img.src} alt={img.src}></img>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="right-part">
              <h1 className="detail-title">{project.title}</h1>
              <p>{project.workDetail}</p>
              <p>{project.stack}</p>
              <a href={project.link} target="_blank">
                <FontAwesomeIcon icon={faLink} /> <u>바로가기</u>
              </a>
              <article>
                {project.description.split("\n").map((line, idx) => (
                  <React.Fragment key={idx}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </article>
            </div>
          </div>
          <div className="detail-img-container">
            <p className="sub-title">
              <FontAwesomeIcon icon={faCheck} /> 주요 페이지
            </p>
            <hr></hr>
            <div className="detail-layout">
              {project.images.map((img, index) => (
                <div
                  key={index}
                  className={`img-box ${
                    project.images.length === 1 ? "full-width" : ""
                  }`}
                >
                  <p className="img-title">{img.title}</p>
                  <div>
                    <img src={img.src} alt={img.title}></img>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default ProjectDetail;
