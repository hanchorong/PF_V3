import social2 from "./../Assets/images/socialluder2.webp";
import socialSwiper2 from "./../Assets/images/social2/influ-modal.webp";
import social from "./../Assets/images/sociallouder.webp";
import landing from "./../Assets/images/landing.webp";
import wekeepT from "./../Assets/images/wekeept_thumb.webp";
import fbw from "./../Assets/images/fbw_thumb.webp";
import mbtingI from "./../Assets/images/mbtingi_thumb.webp";
import nado from "./../Assets/images/nado_thumb.webp";
import tutor from "./../Assets/images/tutoring_thumb.webp";
import sns from "./../Assets/images/sns_thumb.webp";
import chat from "./../Assets/images/chat.webp";

export const projects = [
  {
    id: "social15",
    title: "소셜라우더 Ver 1.5",
    workDetail: "작업영역: 퍼블리싱 100%",
    stack:
      "PHP / scss / jquery / swiperJS / AOS / FullCalendarJS / DateRangePickerJS / ChartJS",
    src: social2,
    option: "work",
    link: "https://sociallouder.co.kr/",
    description: "인플루언서 마케팅 서비스. 디자인 변경 Ver 1.5",
    swiper: socialSwiper2,
  },
  {
    id: "sociallouder",
    title: "소셜라우더",
    workDetail: "작업영역: 퍼플리싱 100%",
    stack:
      "PHP / scss / jquery / swiperJS / AOS / FullCalendarJS /DateRangePickerJS / ChartJS",
    src: social,
    option: "work",
    link: "https://sociallouder.co.kr/",
    description:
      "인플루언서 마케팅 서비스. 영화, 드라마, 방송, 공연, 엔터테인먼트를 아우르는 문화컨텐츠 전문 인플루언서 마케팅 서비스. *리뉴얼 후 평균 방문자 수 28.37% 증가.",
  },
  {
    id: "landing",
    title: "소셜라우더 마케팅 랜딩페이지",
    workDetail: "작업영역: 퍼플리싱 100%",
    stack: "PHP / scss / jquery / swiperJS / AOS",
    src: landing,
    option: "work",
    link: "https://sociallouder.co.kr/landing.php",
    description: "소셜라우더 마케팅 관련 랜딩페이지.",
  },
  {
    id: "wekeepT",
    title: "WEKEEPT",
    workDetail: "작업영역: 퍼플리싱 60%",
    stack: "jsp / scss / jquery / swiperJS / AOS",
    src: wekeepT,
    option: "work",
    link: "https://www.wekeept.co.kr/",
    description:
      "화물 운송중개 전문 플랫폼 (상단 홈페이지 링크를 통해 자세히 살펴보실 수 있습니다.)",
  },
  {
    id: "fbw",
    title: "FBW 솔루션 (Fulfillment By Wekeep)",
    workDetail: "작업영역: 퍼플리싱 100%",
    stack: "jsp / scss / jquery / swiperJS / AOS / ChartJS",
    src: fbw,
    option: "work",
    link: "https://fbw.wekeep.co.kr/",
    description:
      "풀필먼트 통합 관리 솔루션 입고, 주문, 출고, 재고, 정산 등의 내 물류 상황을 한 번에 확인할 수 있습니다.",
  },
  {
    id: "mbtingI",
    title: "MBTingI",
    workDetail: "작업영역: 프론트/퍼플리싱 80%",
    stack: "ejs / css / js / jquery",
    src: mbtingI,
    option: "personal",
    link: "https://github.com/hanchorong/Project_MBTingI",
    description:
      " 자신의 MBTI를 입력하여 맞춤 상대를 찾아주는 소개팅 서비스입니다.나랑 딱 맞는 MBTI 끼리끼리. 256가지의 MBTI 데이터를 이용해서 선별한 이성을 만나 1:1 채팅을 할 수 있습니다.",
  },
  {
    id: "nado",
    title: "나도먹방",
    option: "Project",
    workDetail: "작업영역: 100%",
    stack: "ejs / css / js / jquery",
    src: nado,
    option: "personal",
    link: "https://github.com/hanchorong/Project_nadoMukbang",
    description:
      "유튜버들이 맛있게 먹었던 음식들의 음식점을 찾아주는 서비스입니다.",
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
  },
  {
    id: "sns",
    title: "항해 SNS",
    workDetail: "작업영역: 퍼플리싱 100%",
    stack: "React Native / StyleSheet",
    src: sns,
    link: "",
    description: "선원을 위한 해양 전용 SNS 플랫폼.",
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
  },
];
