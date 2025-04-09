import "./styled.css";

const SectionAbout = ({ greenSectionRef }) => {
  return (
    <>
      <section
        id="section-about"
        className="section_02-1"
        ref={greenSectionRef}
      >
        <div className="inner_02">
          <div className="box" data-aos="fade-up" data-aos-duration="600">
            <h1 className="title">
              ABOUT <span className="color-sub-grn">HAN</span>
            </h1>
            <article>
              안녕하세요! 웹 퍼블리셔 한초롱입니다. <br />
              퍼블리싱의 매력에 빠져 공부하고 노력하는{" "}
              <span className="color-wht">3년차 웹 퍼블리셔</span>입니다.
              <br />
              <br />
              <span className="color-wht">
                모든 사용자가 쉽고 편리하게 이용할 수 있는 웹 환경
              </span>
              을 만들기 위해,
              <br />
              웹 접근성과 웹 표준을 준수하며 <br /> 자연스러운 반응형 작업을
              구현하는 것이 제 역할이라고 생각합니다.
              <br />
              <br />
              또한, 디자이너로서의 경험을 바탕으로
              <br />
              다양한 툴을 빠르고 능숙하게 활용할 수 있으며,
              <br />
              <span className="color-wht">
                다양한 라이브러리를 커스텀하여 최적화하는 것에도 강점
              </span>
              이 있습니다.
              <br />
              <br />
              다년간의 사회 경험을 통해{" "}
              <span className="color-wht">책임감 있게 프로젝트를 수행</span>
              하며,
              <br />
              더 나은 코드 작성을 위해 항상 고민하고 연구하는
              <br /> 성장하는 퍼블리셔가 되기 위해 노력하고 있습니다.
            </article>
          </div>
        </div>
      </section>
      ;
    </>
  );
};

export default SectionAbout;
