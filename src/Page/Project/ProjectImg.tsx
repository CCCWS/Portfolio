import React, { useRef } from "react";
import styled from "styled-components";

import MouseScrollIcon from "@Component/Atom/MouseScrollIcon";

import useObserver from "@CustomHooks/useObserver";

interface Props {
  image: string[];
  setCurrImg: React.Dispatch<React.SetStateAction<string>>;
  setOnModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProjectImg = ({ image, setCurrImg, setOnModalOpen }: Props) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { isView: scrollBottomCheck } = useObserver(scrollRef, 0.5);

  return (
    <Div id="project_img_box">
      {image.map((img, index) => (
        <ProjectImgList
          id="project_img_box"
          key={index}
          src={img}
          alt={img}
          onClick={() => {
            setCurrImg(img);
            setOnModalOpen(true);
          }}
        />
      ))}
      <ScrollIcon scrollBottomCheck={scrollBottomCheck}>
        <MouseScrollIcon />
      </ScrollIcon>
      <CheckBottom ref={scrollRef} />
    </Div>
  );
};

const Div = styled.div`
  width: 100%;
  height: 100%;

  position: relative;

  @media (max-width: 750px) {
    display: none;
  }
`;

const ProjectImgList = styled.img`
  width: 100%;
  min-height: 30%;
  max-height: 30%;

  margin-bottom: 10px;
  margin-top: 10px;

  border-radius: 5px;

  object-fit: cover;

  transition: 0.3s;

  &:hover {
    opacity: 0.5;
  }
`;

const ScrollIcon = styled.div<{ scrollBottomCheck: boolean }>`
  width: 100%;
  height: 1px;

  translate: 5s;
  opacity: ${(props) => (props.scrollBottomCheck ? "0" : "1")};

  display: flex;
  justify-content: center;
  align-items: center;

  position: sticky;
  bottom: 30px;
`;

const CheckBottom = styled.div`
  width: 100%;
  min-height: 1px;
`;

export default React.memo(ProjectImg);
