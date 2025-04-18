import React from "react";
import { useParams } from "react-router-dom";
import { projects } from "../../Data/projects";
import "./styled.css";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <p>프로젝트를 찾을 수 없습니다.</p>;
  return (
    <>
      <div className="detail-wrap">
        <div className="detail-main">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop={true}
          >
            <SwiperSlide>
              <div className="slide">
                <img src={project.src}></img>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide">
                <img src={project.swiper}></img>
              </div>
            </SwiperSlide>
          </Swiper>

          <div className="right-part">
            <h1 className="detail-title">{project.title}</h1>
            <p>{project.workDetail}</p>
            <p>{project.stack}</p>
            <a href={project.link}>Link</a>
            <article>{project.description}</article>
          </div>
        </div>
        <div className="detail-img-container"></div>
      </div>
    </>
  );
};

export default ProjectDetail;
