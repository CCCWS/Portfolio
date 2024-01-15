import React, { useRef } from "react";
import styled from "styled-components";
import { SkillType } from "@Data/SkillList";
import useObserver from "@CustomHooks/useObserver";

interface SkillIconProp {
  title: string;
  data: SkillType[];
}

const SkillIcon = ({ data, title }: SkillIconProp) => {
  const skillRef = useRef<HTMLDivElement>(null);
  const { isView } = useObserver(skillRef, 0.4);
  return (
    <Div isView={isView} ref={skillRef}>
      <Title>{title}</Title>
      <SkillImgBox>
        {data.map((item, index) => (
          <SkillImg key={index} img={item.img} name={item.name}></SkillImg>
        ))}
      </SkillImgBox>
    </Div>
  );
};

const Div = styled.div<{ isView: boolean }>`
  width: 300px;

  border-radius: 30px;
  padding: 20px;

  background-color: white;

  display: grid;
  grid-template-rows: 10% 90%;

  box-shadow: 5px 5px 5px 2px black;
  transition: 0.5s;

  opacity: ${(props) => (props.isView ? 1 : 0.5)};

  &:hover {
    transform: translateY(-20px);
  }
`;

const Title = styled.div`
  width: 100%;
  height: 100%;

  font-size: 2rem;
  text-align: center;

  border-bottom: 1px solid gray;
`;

const SkillImgBox = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 20px;
  gap: 20px 0px;
`;

const SkillImg = styled.div<{ img: string; name: string }>`
  width: 100%;
  height: 100px;

  background-image: ${(props) => `url(${props.img})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  border-radius: 10px;
  overflow: hidden;

  position: relative;

  &:hover {
    &::before {
      opacity: 1;
    }
  }

  &::before {
    content: "${(props) => props.name}";
    width: 100%;
    height: 100%;

    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;

    opacity: 0;
    transition: 0.3s;

    color: white;
    background-color: #535353a4;
  }
`;

export default SkillIcon;
