import {
  SkillType,
  javascript,
  css,
  html,
  typescript,
  react,
  redux,
  styled_components,
  nodeJs,
  express,
  axios,
  mongoDB,
  s3,
  ec2,
  github_page,
  netlify,
  cloudtype,
  firebase,
} from "./SkillList";

import {
  shopping_img_arr,
  movie_img_arr,
  aiChat_img_arr,
  portfolio_img_arr,
  memo_img_arr,
  todo_img_arr,
} from "./ImageList";

import shopping_thumbnail from "@Data/Thumbnail/shopping_thumbnail.PNG";
import portfolio_thumbnail from "@Data/Thumbnail/portfolio_thumbnail.PNG";
import ai_thumbnail from "@Data/Thumbnail/ai_thumbnail.PNG";
import memo_thumbnail from "@Data/Thumbnail/memo_thumbnail.PNG";
import movie_thumbnail from "@Data/Thumbnail/movie_thumbnail.PNG";
import todoList_thumbnail from "@Data/Thumbnail/todoList_thumbnail.PNG";

export interface ProjectType {
  title: string;
  description: string;
  // purpose: string;
  thumbnail: string;
  image: string[];
  skill: SkillType[];
  repositoryUrl: string;
  deploy?: SkillType | SkillType[];
  deployUrl?: string;
  etc?: string[];
}

export const ProjectList: ProjectType[] = [
  {
    title: "쇼핑몰 사이트",
    description:
      "사용자 회원가입 및 로그인부터 상품등록, 조회, 구매, 구매내역, 장바구니 추가 등 쇼핑몰 사이트의 전반적인 과정을 구현하였으며 Node.js Express를 사용해 서버를 구축하고 MongoDB에 사용자 정보와 상품 정보 저장 및 조회, 이미지 파일은 AWS S3에 업로드하여 관리됩니다.",
    // purpose:
    //   "클라이언트 뿐만 아니라 서버까지 구현함으로써 하나의 완성된 사이트",
    thumbnail: shopping_thumbnail,
    image: shopping_img_arr,
    skill: [
      javascript,
      css,
      react,
      redux,
      styled_components,
      axios,
      nodeJs,
      express,
      mongoDB,
      s3,
    ],
    repositoryUrl: "https://github.com/CCCWS/react-shopping-app",
    deploy: [netlify, ec2],
    deployUrl: "http://cwshopping.shop/",
    etc: ["반응형", "다크모드", "서버"],
  },

  {
    title: "영화 정보 사이트",
    description:
      "TMDB의 영화 데이터를 API요청하고 응답받은 데이터를 가공하여 사용합니다. 영화 및 TV시리즈의 상세 정보와 카테고리별 분류, 키워드를 조합한 상세 검색, LocalStorage를 사용하여 조회내역 및 즐겨찾기 기능을 제공합니다.",
    // purpose: "요청한 데이터를 보기좋게 가공",
    thumbnail: movie_thumbnail,
    image: movie_img_arr,
    skill: [javascript, css, react],
    repositoryUrl: "https://github.com/CCCWS/react-movie-app",
    deploy: firebase,
    deployUrl: "https://cws-react-movie-ae030.web.app/",
    etc: ["반응형", "API"],
  },

  {
    title: "AI채팅",
    description:
      "OpenAi의 학습된 데이터를 기반으로 대화를 주고 받을수 있습니다. 한글 전송시 다소 매끄럽지 못한 상황이 발생하여 NAVER PAPAGO API를 사용하여 번역하여 메세지가 전송됩니다.",
    // purpose: "실제 메신저와 유사하게 구성",
    thumbnail: ai_thumbnail,
    image: aiChat_img_arr,
    skill: [react, typescript, styled_components, axios],
    repositoryUrl: "https://github.com/CCCWS/react-aichat",
    deploy: [netlify, cloudtype],
    deployUrl: "https://singular-trifle-93bd7b.netlify.app",
    etc: ["API", "CORS"],
  },

  {
    title: "포트폴리오",
    description: "프로젝트 소개를 위한 포트폴리오 사이트입니다.",
    // purpose: "프로젝트 소개",
    thumbnail: portfolio_thumbnail,
    image: portfolio_img_arr,
    skill: [react, typescript, styled_components],
    repositoryUrl: "https://github.com/CCCWS/ddd",
    deploy: github_page,
    deployUrl: "https://cccws.github.io/ddd/",
  },

  {
    title: "심플 메모",
    description:
      "간단한 메모를 날짜와 점수를 선택하여 등록하는 메모장 사이트입니다. 데이터는 localstorage에 저장되며 수정 및 삭제가 가능하고 작성일별 정렬과 점수별 필터링이 가능합니다.",
    // purpose: "context api를 이용한 데이터 전달과 localstorage에 데이터 저장",
    thumbnail: memo_thumbnail,
    image: memo_img_arr,
    skill: [javascript, css, react],
    repositoryUrl: "https://github.com/CCCWS/react-simpleMemo-app",
    deploy: firebase,
    deployUrl: "https://cws-react-project.web.app/",
  },

  {
    title: "Todo List",
    description:
      "자바스크립트를 학습하며 처음 만들어본 페이지입니다. 현재 위치를 기반으로 날씨가 표시되고 사용자 이름을 입력받고 로그인, 간단한 메모를 작성할 수 있습니다.",
    // purpose: "자바스크립트, html, css 기초학습",
    thumbnail: todoList_thumbnail,
    image: todo_img_arr,
    skill: [javascript, html, css],
    repositoryUrl: "https://github.com/CCCWS/vanillaJS",
  },
];
