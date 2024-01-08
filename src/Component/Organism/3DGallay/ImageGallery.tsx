import React, { useState } from "react";
import styled, { css } from "styled-components";

interface ImageGalleryProps {
  children: React.ReactNode;
  perspective?: number;
  zAxis?: number;
  reflect?: boolean;
}

const ImageGallery = ({
  children,
  perspective,
  zAxis,
  reflect,
}: ImageGalleryProps) => {
  const childrenArr = React.Children.toArray(children);
  const calcAngle = 360 / childrenArr.length;

  interface CurrLocationType {
    index: number;
    location: number;
  }

  const [currLocation, setCurrLocation] = useState<CurrLocationType>({
    index: 0,
    location: 0,
  });

  const onNextEvet = () => {
    setCurrLocation({
      index:
        currLocation.index === childrenArr.length - 1
          ? 0
          : currLocation.index + 1,
      location: currLocation.location - calcAngle,
    });
  };

  const onPervEvet = () => {
    setCurrLocation({
      index:
        currLocation.index === 0
          ? childrenArr.length - 1
          : currLocation.index - 1,
      location: currLocation.location + calcAngle,
    });
  };

  const onClickImg = (e: React.MouseEvent, index: number) => {
    const Difference = currLocation.index - index;

    if (Difference === 0) return;

    setCurrLocation({
      index: index,
      location: currLocation.location + Difference * calcAngle,
    });

    if (e.target !== e.currentTarget) return;
  };

  return (
    <Box
      currLocation={currLocation.location}
      perspective={perspective ? perspective : 1000}
    >
      <ButtonBox>
        <GallaryButton btnType={"prev"} onClick={onPervEvet} />
        <GallaryButton btnType={"next"} onClick={onNextEvet} />
      </ButtonBox>

      <div>
        {childrenArr.map((data: any, index: number) => (
          <Image
            onClick={(e) => onClickImg(e, index)}
            key={index}
            index={index}
            currIndex={currLocation.index === index}
            angle={calcAngle}
            zAxis={zAxis ? zAxis : 300}
            isReflect={reflect ? reflect : false}
          >
            {data}
          </Image>
        ))}
      </div>
    </Box>
  );
};

interface BoxProps {
  currLocation: number;
  perspective: number;
}

const Box = styled.div<BoxProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  position: relative;

  width: 100%;
  height: 100%;

  transform-style: preserve-3d;

  & > :nth-child(2) {
    position: relative;
    transform-style: preserve-3d;
    transition: 1s;
    transform: ${(props) =>
      `perspective(${props.perspective}) rotateY(${props.currLocation}deg)`};

    @media (max-width: 750px) {
      transform: ${(props) =>
        `perspective(${props.perspective}) rotateX(${props.currLocation}deg)`};
    }
  }
`;

interface ImageProps {
  index: number;
  angle: number;
  currIndex: boolean;
  zAxis: number;
  isReflect: boolean;
}

const Image = styled.div<ImageProps>`
  position: absolute;

  transform: translate(-50%, -50%);

  transform-style: preserve-3d;

  & > :first-child {
    opacity: ${(props) => (props.currIndex ? "1" : "0.2")};

    transition: 1s;
    transform: ${(props) =>
      `rotateY(calc(${props.index} * ${props.angle}deg)) rotateY(0deg) translate3d(0,0, ${props.zAxis}px) `};

    -webkit-box-reflect: ${(props) =>
      props.isReflect &&
      "below 3px linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))"};

    @media (max-width: 750px) {
      transform: ${(props) =>
        `rotateX(calc(${props.index} * ${props.angle}deg)) rotateY(0deg) translate3d(0,0, 350px) `};
    }
  }
`;

const ButtonBox = styled.div`
  position: absolute;
  bottom: 20px;
  z-index: 1;

  width: 130px;
  height: 50px;

  display: flex;
  justify-content: space-around;
  align-items: center;

  border-radius: 30px;

  background-color: #8d8d8d53;
`;

const GallaryButton = styled.button<{ btnType: string }>`
  width: 40px;
  height: 40px;

  position: relative;
  border: none;
  background-color: transparent;
  border-radius: 50%;
  transition: 0.5s;

  &::before {
    content: "";

    width: 50%;
    height: 50%;

    position: absolute;
    top: 50%;
    left: 50%;

    border-top: 2px solid white;
    border-bottom: 2px solid transparent;
    background-color: transparent;

    ${(props) =>
      props.btnType === "prev" &&
      css`
        border-left: 2px solid white;
        border-right: 2px solid transparent;

        transform: translate(-50%, -50%) rotate(-45deg);
      `}

    ${(props) =>
      props.btnType === "next" &&
      css`
        border-right: 2px solid white;
        border-left: 2px solid transparent;

        transform: translate(-50%, -50%) rotate(45deg);
      `}
  }

  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;

export default React.memo(ImageGallery);
