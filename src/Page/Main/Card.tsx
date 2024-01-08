import React from "react";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";

import questionImg from "@Data/icon/question.png";
import Card3D from "@Component/Molecule/Card3D";

interface CardType {
  title: string;
  left: number;
  delay: number;
  image: string;
  path: string;
  newPage?: boolean;
}

interface CardProps {
  lastMessage: boolean;
  data: CardType;
}

const Card = ({ lastMessage, data }: CardProps) => {
  const nav = useNavigate();
  const onNav = (path: string, newPage?: boolean) => {
    if (newPage) {
      window.open(`${path}`, "_blank");
      return;
    }

    nav(path);
  };

  return (
    <>
      <CardDiv
        lastMessage={lastMessage}
        left={data.left}
        delay={data.delay}
        onClick={() => onNav(data.path, data.newPage)}
      >
        <Card3D hoverScale={1.2} haveParentComponent={true}>
          <Front
            lastMessage={lastMessage}
            img={data.image}
            title={data.title}
          ></Front>
          <Back lastMessage={lastMessage} backImg={questionImg}></Back>
        </Card3D>
      </CardDiv>
    </>
  );
};

interface CardStyle {
  lastMessage: boolean;
  left: number;
  delay: number;
}

const CardBase = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  backface-visibility: hidden;
  transform-style: preserve-3d;

  border-radius: 20px;
  transition: 1s;

  overflow: hidden;
  border: 3px solid gray;
`;

interface FrontStyle {
  lastMessage: boolean;
  img: string;
  title: string;
}

const Front = styled(CardBase)<FrontStyle>`
  position: absolute;
  background-color: ${(props) => props.theme.color.gray_transparency};
  transition-delay: ${(props) => (props.lastMessage ? "0.8s" : "0s")};
  transform: ${(props) =>
    props.lastMessage ? "rotateY(0deg)" : "rotateY(180deg)"};

  background-image: ${(props) => `url(${props.img})`};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  //라벨
  &::before {
    content: "${(props) => props.title}";
    -webkit-text-stroke: 1px black;
    width: 100%;
    height: 30%;
    background: linear-gradient(
      to bottom,
      rgba(20, 20, 20, 0) 10%,
      rgba(20, 20, 20, 0.25) 25%,
      rgba(20, 20, 20, 0.5) 50%,
      rgba(20, 20, 20, 0.75) 75%,
      rgba(20, 20, 20, 1) 100%
    );

    font-size: 1.5rem;
    color: white;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    bottom: 0px;
  }
`;

const Back = styled(CardBase)<{ lastMessage: boolean; backImg: string }>`
  position: absolute;
  background-color: ${(props) => props.theme.color.gray_transparency};
  transition-delay: ${(props) => (props.lastMessage ? "0.8s" : "0s")};
  transform: ${(props) =>
    props.lastMessage ? "rotateY(180deg)" : "rotateY(0deg)"};

  background-image: ${(props) => `url(${props.backImg})`};
  background-position: center;
  background-size: 70%;
  background-repeat: no-repeat;
  background-origin: content-box;
  padding: 10px;

  @media (max-width: 600px) {
    background-size: contain;
  }
`;

const CardDiv = styled.div<CardStyle>`
  width: 25%;
  height: 450px;

  position: absolute;
  top: 100%;
  left: 50%;

  transform: translate(-50%, 0%);
  opacity: 0;
  z-index: 1;

  transition: 0.5s;

  @media (max-width: 600px) {
    width: 80%;
    height: 28%;
    transform: translateX(-120%);
    position: relative;
    top: 0;
    left: 0;
  }

  ${(props) =>
    props.lastMessage &&
    css`
      top: 50%;
      left: ${() => `${props.left}%`};
      transform: translate(-50%, -50%);
      opacity: 1;

      @media (max-width: 600px) {
        transform: translateX(0);
        transition-delay: ${() => `${props.delay}s`};
        left: 0;
        top: 0;
      }

      &:hover {
        cursor: pointer;
      }
    `}
`;

export default React.memo(Card);
