// sociallouder2
import social2 from "./../Assets/images/socialluder2.webp";
import socialSwiper2 from "./../Assets/images/social2/influ-modal.webp";
import social2Img2 from "./../Assets/images/social2/categories.webp";
import social2Img1 from "./../Assets/images/social2/re-main.webp";
import social2Img3 from "./../Assets/images/social2/re-detail.webp";
import social2Img4 from "./../Assets/images/social2/detail-products.webp";
import social2Img5 from "./../Assets/images/social2/re-statistic.webp";
import social2Img6 from "./../Assets/images/social2/statistic-modal.webp";
//sociallouder
import social from "./../Assets/images/sociallouder.webp";
import socialSwiper from "./../Assets/images/social/camp_my_onB.webp";
import socialImg1 from "./../Assets/images/social/main.webp";
import socialImg2 from "./../Assets/images/social/item_detail.webp";
import socialImg3 from "./../Assets/images/social/camOpen.webp";
import socialImg4 from "./../Assets/images/social/camOpen2.webp";
import socialImg5 from "./../Assets/images/social/select.webp";
import socialImg6 from "./../Assets/images/social/influ-modal.webp";
import socialImg7 from "./../Assets/images/social/chart1.webp";
import socialImg8 from "./../Assets/images/social/datePick.webp";
//landing
import landing from "./../Assets/images/landing.webp";
import landing2 from "./../Assets/images/landing/landing_w.webp";
import landing3 from "./../Assets/images/landing/landing_m.webp";
// wekeepT
import wekeepT from "./../Assets/images/wekeept_thumb.webp";
import swiperT from "./../Assets/images/wekeepT/main.webp";
import wekeepT2 from "./../Assets/images/wekeepT/tec.webp";
import wekeepT3 from "./../Assets/images/wekeepT/service2.webp";
import wekeepT4 from "./../Assets/images/wekeepT/member.webp";
// fbw
import fbw from "./../Assets/images/fbw_thumb.webp";
// mbtingI
import mbtingI from "./../Assets/images/mbtingi_thumb.webp";
import swiperMbting from "./../Assets/images/mbtingI/1.gif";
import mbtingI1 from "./../Assets/images/mbtingI/2.gif";
import mbtingI2 from "./../Assets/images/mbtingI/3.gif";
import mbtingI3 from "./../Assets/images/mbtingI/4.gif";
import mbtingI4 from "./../Assets/images/mbtingI/5.gif";
import mbtingI5 from "./../Assets/images/mbtingI/6.gif";
import mbtingI6 from "./../Assets/images/mbtingI/award.webp";
// nado
import nado from "./../Assets/images/nado_thumb.webp";
import swiperNado from "./../Assets/images/nado/1.webp";
import nado2 from "./../Assets/images/nado/2.webp";
import nado3 from "./../Assets/images/nado/3.webp";
import nado4 from "./../Assets/images/nado/5.webp";
import nado5 from "./../Assets/images/nado/award.webp";
import nado6 from "./../Assets/images/nado/6.webp";
//tutor
import tutor from "./../Assets/images/tutoring_thumb.webp";
import tutor2 from "./../Assets/images/tutor/1.webp";
import tutor3 from "./../Assets/images/tutor/2.webp";
import tutor4 from "./../Assets/images/tutor/3.webp";
import tutor5 from "./../Assets/images/tutor/4.webp";
//sns
import sns from "./../Assets/images/sns_thumb.webp";
//socket
import chat from "./../Assets/images/chat.webp";
import swiperChat from "./../Assets/images/chat/chat.webp";
import chat2 from "./../Assets/images/chat/222.gif";

export const projects = [
  {
    id: "social15",
    title: "소셜라우더 Ver 1.5",
    workDetail: "작업영역: 반응형 퍼블리싱 100%",
    stack:
      "PHP / scss / jquery / swiperJS / AOS / FullCalendarJS / DateRangePickerJS / ChartJS",
    src: social2,
    option: "work",
    link: "https://sociallouder.co.kr/",
    description:
      "인플루언서 마케팅 서비스.\n 디자인 변경에 따른 퍼블리싱 Ver 1.5",
    swiper: [{ src: social2 }, { src: socialSwiper2 }],
    images: [
      { title: "- 메인 페이지", src: social2Img1 },
      { title: "- 카테고리", src: social2Img2 },
      { title: "- 캠페인 신청 페이지 (문화)", src: social2Img3 },
      { title: "- 캠페인 신청 페이지 (제품)", src: social2Img4 },
      { title: "- 비지니스 통계확인", src: social2Img5 },
      { title: "- 비지니스 통계확인 상세 모달", src: social2Img6 },
    ],
  },
  {
    id: "sociallouder",
    title: "소셜라우더",
    workDetail: "작업영역: 반응형 퍼플리싱 100%",
    stack:
      "PHP / scss / jquery / swiperJS / AOS / FullCalendarJS /DateRangePickerJS / ChartJS",
    src: social,
    option: "work",
    link: "https://sociallouder.co.kr/",
    description:
      "인플루언서 마케팅 서비스.\n 영화, 드라마, 방송, 공연, 엔터테인먼트를 아우르는 문화컨텐츠 전문 인플루언서 마케팅 서비스.\n *리뉴얼 후 평균 방문자 수 28.37% 증가.",
    swiper: [{ src: social }, { src: socialSwiper }],
    images: [
      { title: "- 메인 페이지", src: socialImg1 },
      { title: "- 캠페인 신청 페이지", src: socialImg2 },
      { title: "- 출석체크 페이지", src: socialImg8 },
      { title: "- 캠페인 오픈 (온보딩)", src: socialImg3 },
      { title: "- 캠페인 오픈 step2", src: socialImg4 },
      { title: "- 캠페인 관리 (온보딩)", src: socialSwiper },
      { title: "- 인플루언서 목록 (보드 뷰)", src: socialImg5 },
      { title: "- 인플루언서 목록 상세 모달 (리스트 뷰)", src: socialImg6 },
      { title: "- 인플루언서 통계확인 상세 모달", src: socialImg7 },
    ],
  },
  {
    id: "landing",
    title: "소셜라우더 마케팅 랜딩페이지",
    workDetail: "작업영역: 반응형 퍼플리싱 100%",
    stack: "PHP / scss / jquery / swiperJS / AOS",
    src: landing,
    option: "work",
    link: "https://sociallouder.co.kr/landing.php",
    description: "소셜라우더 마케팅 관련 랜딩페이지.",
    swiper: [{ src: landing }],
    images: [
      { title: "- 랜딩 페이지 (웹)", src: landing2 },
      { title: "- 랜딩 페이지 (모바일)", src: landing3 },
    ],
  },
  {
    id: "wekeepT",
    title: "WEKEEPT",
    workDetail: "작업영역: 반응형 퍼플리싱 60%",
    stack: "jsp / scss / jquery / swiperJS / AOS",
    src: wekeepT,
    option: "work",
    link: "https://www.wekeept.co.kr/",
    description:
      "화물 운송중개 전문 플랫폼\n (상단 홈페이지 링크를 통해 자세히 살펴보실 수 있습니다.)",
    swiper: [{ src: wekeepT }, { src: swiperT }],
    images: [
      { title: "- 메인 페이지 (인트로 포함)", src: swiperT },
      { title: "- 배차기술력 페이지", src: wekeepT2 },
      { title: "- 멤버십 가입 페이지", src: wekeepT4 },
      { title: "- 반응형 예시", src: wekeepT3 },
    ],
  },
  {
    id: "fbw",
    title: "FBW 솔루션 (Fulfillment By Wekeep)",
    workDetail: "작업영역: 퍼플리싱 100%",
    stack: "jsp / scss / Bootstrap / jquery / swiperJS / AOS / ChartJS",
    src: fbw,
    option: "work",
    link: "https://fbw.wekeep.co.kr/",
    description:
      "풀필먼트 통합 관리 솔루션\n 입고, 주문, 출고, 재고, 정산 등의 내 물류 상황을 한 번에 확인할 수 있습니다.",
    swiper: [{ src: fbw }],
    images: [
      {
        title:
          "- 메인 페이지 (멤버쉽 가입 후 사용할 수 있는 솔루션이기 때문에 포트폴리오에 많은 사진을 올릴 수 없는 점 양해 부탁드립니다.아래 이미지를 참고해 주세요. XD 파일로 약 162페이지 분량의 퍼블리싱이었습니다)",
        src: fbw,
      },
    ],
  },
  {
    id: "mbtingI",
    title: "MBTingI",
    workDetail: "작업영역: 프론트 / 반응형 퍼플리싱 80%",
    stack: "ejs / css / js / jquery",
    src: mbtingI,
    option: "personal",
    link: "https://github.com/hanchorong/Project_MBTingI",
    description:
      " 자신의 MBTI를 입력하여 맞춤 상대를 찾아주는 소개팅 서비스입니다.\n 나랑 딱 맞는 MBTI 끼리끼리. 256가지의 MBTI 데이터를 이용해서 선별한 이성을 만나 1:1 채팅을 할 수 있습니다.",
    swiper: [{ src: mbtingI }, { src: swiperMbting }],
    images: [
      { title: "- 메인 페이지", src: mbtingI },
      { title: "- 회원가입", src: mbtingI1 },
      { title: "- 로그인", src: mbtingI2 },
      { title: "- 비밀번호 찾기", src: mbtingI3 },
      { title: "- 매칭 서비스 페이지", src: mbtingI4 },
      { title: "- 매칭 회원 채팅", src: mbtingI5 },
      { title: "- 프로젝트 상장", src: mbtingI6 },
    ],
  },
  {
    id: "nado",
    title: "나도먹방",
    option: "Project",
    workDetail: "작업영역: 100%",
    stack: "ejs / css / js / jquery / Bootstrap",
    src: nado,
    option: "personal",
    link: "https://github.com/hanchorong/Project_nadoMukbang",
    description:
      "유튜버들이 맛있게 먹었던 음식들의 음식점을 찾아주는 서비스입니다.",
    swiper: [{ src: nado }, { src: swiperNado }],
    images: [
      { title: "- 메인 페이지", src: swiperNado },
      { title: "- 유튜버별 페이지", src: nado2 },
      { title: "- 음식별 페이지", src: nado3 },
      { title: "- 프로모션 페이지", src: nado4 },
      { title: "- 문의하기 페이지", src: nado6 },
      { title: "- 프로젝트 상장", src: nado5 },
    ],
  },
  {
    id: "tutoring",
    title: "Tutoring Services",
    workDetail: "작업영역: 퍼플리싱 100%",
    stack: "Typescript / styled-components",
    src: tutor,
    option: "work",
    link: "https://studymingle.org/main",
    description:
      "외국인 튜터 매칭 서비스입니다. 매칭 후 영상채팅을 통해 교육을 받습니다.",
    swiper: [{ src: tutor }],
    images: [
      { title: "- 메인 페이지", src: tutor2 },
      { title: "- About Us 페이지", src: tutor3 },
      { title: "- 로그인 페이지", src: tutor4 },
      { title: "- 튜터 찾기 페이지", src: tutor5 },
    ],
  },
  {
    id: "sns",
    title: "항해 SNS",
    workDetail: "작업영역: 앱 퍼플리싱 100%",
    stack: "React Native / StyleSheet",
    src: sns,
    option: "work",
    link: "",
    description: "선원을 위한 해양 전용 SNS 플랫폼.",
    swiper: [{ src: sns }],
    images: [
      {
        title:
          "출시 되지 않은 App이기 때문에 많은 이미지를 첨부할 수 없는 점 양해 부탁드립니다.",
        src: sns,
      },
    ],
  },
  {
    id: "chat",
    title: "Socket Chat",
    workDetail: "작업영역: 퍼플리싱 100%",
    stack: "ejs / css / js",
    src: chat,
    option: "personal",
    link: "https://github.com/hanchorong/socket_chat",
    description: "socket을 이용한 다중 채팅.",
    swiper: [{ src: chat }, { src: chat2 }],
    images: [{ title: "", src: chat2 }],
  },
];
