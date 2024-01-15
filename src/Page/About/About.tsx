import { useRef } from "react";
import styled, { css } from "styled-components";

import { Page } from "@Style/PageStyle";

import SkillBox from "./SkillBox";
import githubIcon from "../../Data/icon/github.png";
import useObserver from "@CustomHooks/useObserver";

const About = () => {
  const onClickIcon = () => {
    window.open("https://github.com/CCCWS", "_blank");
    return;
  };

  const titleRef = useRef<HTMLDivElement>(null);
  const introductionRef = useRef<HTMLDivElement>(null);
  const { isView: titleIsView } = useObserver(titleRef, 1);
  const { isView: introductionIsView } = useObserver(introductionRef, 0.5);

  return (
    <Page>
      <Div>
        <Title ref={titleRef} isView={titleIsView}>
          <div>사용자의 입장에서 고민하는</div>
          <div>프론트엔드 개발자 최웅식입니다.</div>
          <Icon img={githubIcon} onClick={onClickIcon}></Icon>
        </Title>
        <SkillBox></SkillBox>
        <Introduction ref={introductionRef} isView={introductionIsView}>
          <p>
            개발을 하며 사용자 경험 향상을 위해 웹 페이지 로딩 시간을 단축하는데
            중점을 두었습니다. 이를 위해 성능 최적화 기술을 활용하여 한
            프로젝트에서 Lighthouse 검사 결과 LCP가 5초를 넘어가는 문제가
            발생하였을때 Infinite Scroll 및 Lazy Loading을 구현하여 LCP를 2초
            이하로 대폭 줄일 수 있었습니다. 이런 경험은 페이지 성능을
            향상시키는데 있어 중요한 교훈이 되었습니다.
          </p>

          <p>
            다양한 기기와 브라우저에서 웹사이트가 일관적으로 작동하도록 하는
            것에도 주력했습니다. 이를 위해 CSS의 미디어 쿼리와 상대적 단위(%,
            vh, vw, rem 등)를 적극 활용했습니다. 이러한 반응형 웹 디자인을 통해
            스마트폰, 태블릿, 데스크탑 등 다양한 화면 크기에 맞춰 웹사이트가
            유연하게 보여질 수 있게 구현했습니다. 이런 방법은 모든 사용자에게
            최적의 경험을 제공하는 데 필수적이었습니다.
          </p>

          <p>
            사용자가 실행할 수 있는 다양한 시나리오에 대한 테스트를
            수행하였습니다. 예를 들어 쇼핑몰 사이트의 장바구니 기능을 구현할 때
            사용자가 상품을 추가하거나 삭제하며 발생하는 다양한 상황을 설정하고
            테스트를 수행했습니다. 이 과정에서 발견된 버그는 즉시 수정했으며
            이를 통해 안정성과 사용자 친화성을 크게 향상시켰습니다.
          </p>
        </Introduction>
      </Div>
    </Page>
  );
};

const Div = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;

const Title = styled.div<{ isView: boolean }>`
  width: 100%;
  height: 300px;
  background-color: #ffffffc7;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  white-space: pre-line;
  line-height: 40px;

  padding: 30px;

  font-size: 2rem;

  display: flex;
  flex-direction: column;

  transition: 0.3s;
  opacity: ${(props) => (props.isView ? 1 : 0.5)};

  & > :nth-child(2) {
    position: relative;

    &::before {
      content: "";
      width: 100%;
      height: 20%;
      background-color: #ff7d7d;
      position: absolute;
      bottom: -10px;
    }
  }
`;

const Icon = styled.div<{ img: string }>`
  width: 80px;
  height: 80px;

  background-image: ${(props) => `url(${props.img})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  transition: 0.3s;

  &:hover {
    cursor: pointer;
    transform: rotateY(360deg);
  }
`;

const Introduction = styled.div<{ isView: boolean }>`
  width: 100%;
  /* height: 800px; */
  /* background-color: #ffffff; */

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 50px 0px;
  padding: 30px;

  transition: 0.3s;
  opacity: ${(props) => (props.isView ? 1 : 0.5)};

  p {
    box-shadow: 5px 5px 5px 2px black;
    background-color: white;
    line-height: 40px;
    font-size: 1.2rem;
    border-radius: 30px;
    padding: 30px;
  }
`;

export default About;
