import React, { useState } from "react";
import styled from "styled-components";

//overscroll-behavior: contain;
//스마트폰 사용시 아래로 스와이프하여 새로고침 방지

interface Props {
  children: any[];
  point?: boolean;
  delay: number;
  location: number;
  setLocation: React.Dispatch<React.SetStateAction<number>>;
}

const OnePageScroll = ({
  children,
  point,
  delay,
  location,
  setLocation,
}: Props) => {
  const newChildren = [children[0], ...children[1]];

  const onPrev = () => {
    if (location === 0) return;
    setLocation((prev) => prev - 1);
  };

  const onNext = () => {
    if (location === newChildren.length - 1) return;
    setLocation((prev) => prev + 1);
  };

  const [onScroll, setOnScroll] = useState<boolean>(true);
  const onWheelEvent = (e: React.WheelEvent) => {
    const targetId = e.target as HTMLElement;

    if (targetId.id === "project_img_box") return;
    if (!onScroll) return;

    setOnScroll(false);
    if (e.deltaY < 0) {
      onPrev();
    }

    if (e.deltaY > 0) {
      onNext();
    }

    setTimeout(() => {
      setOnScroll(true);
    }, delay);
  };

  let startClientY: number = 0;
  const onDownEvent = (e: React.TouchEvent) => {
    startClientY = e.changedTouches[0].clientY;
  };

  const onUpEvent = (e: React.TouchEvent) => {
    const targetId = e.target as HTMLElement;
    if (targetId.id === "project_img_box") return;

    let endClientY = 0;

    endClientY = e.changedTouches[0].clientY;

    let moveY = startClientY - endClientY;
    if (moveY >= 150) {
      onNext();
    }

    if (moveY <= -150) {
      onPrev();
    }
  };

  return (
    <Div
      onTouchStart={onDownEvent}
      onTouchEnd={onUpEvent}
      onWheel={onWheelEvent}
      location={location}
    >
      <div>
        {newChildren.map((children, index) => (
          <Page key={index}>{children}</Page>
        ))}
      </div>

      {point && (
        <PointBox>
          {newChildren.map((data, index) => (
            <Point
              key={index}
              location={location === index && true}
              onClick={() => setLocation(index)}
            />
          ))}
        </PointBox>
      )}
    </Div>
  );
};

const Div = styled.div<{ location: number }>`
  width: 100%;
  height: 100%;

  display: flex;

  flex-direction: column;
  overflow: hidden;
  position: relative;

  & > :first-child {
    width: inherit;
    height: inherit;
    transition: all cubic-bezier(0.22, 0.61, 0.36, 1) 0.8s;
    transform: ${(props) => `translate3d(0,-${props.location}00%,0)`};
  }
`;

const Page = styled.div`
  width: inherit;
  height: inherit;
`;

const PointBox = styled.div`
  width: 30px;
  position: absolute;
  top: 50%;
  transform: translate(0%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Point = styled.div<{ location: boolean }>`
  transition: all ease 0.3s;
  background-color: ${(props) => (props.location ? "black" : "white")};
  border-radius: 30px;
  width: 10px;
  height: 10px;
  transform: ${(props) => (props.location ? "scale(2)" : "scale(1)")};
  margin: 10px;

  &:hover {
    background-color: black;
    transform: scale(2);
  }
`;

export default OnePageScroll;
