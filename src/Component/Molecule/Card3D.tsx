import React, { useState, useRef, useEffect, ReactNode } from "react";
import styled, { css } from "styled-components";

interface CardProps {
  children: ReactNode;
  perspective?: number;
  hoverScale?: number;
  haveParentComponent?: boolean;
}

interface CardSize {
  width: number;
  height: number;
}

const Card3D = ({
  children,
  perspective,
  hoverScale,
  haveParentComponent,
}: CardProps) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [cardSize, setCardSize] = useState<CardSize>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (cardRef.current) {
      setCardSize({
        width: cardRef.current.getBoundingClientRect().width,
        height: cardRef.current.getBoundingClientRect().height,
      });
    }
  }, [cardRef]);

  const over = (offsetX: number, offsetY: number) => {
    const map = (
      val: number,
      minA: number,
      maxA: number,
      minB: number,
      maxB: number
    ) => {
      return minB + ((val - minA) * (maxB - minB)) / (maxA - minA);
    };

    const rotateY = map(offsetX, 0, cardSize.width, -25, 25);
    const rotateX = map(offsetY, 0, cardSize.height, 25, -25);
    const brightness = map(offsetY, 0, 300, 1.5, 0.7);

    if (cardRef.current) {
      cardRef.current.style.setProperty(
        "transform",
        `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${
          hoverScale ? hoverScale : 1
        })`
      );
      cardRef.current.style.setProperty("filter", `brightness(${brightness})`);
    }
  };

  const onMouseOver = (e: React.MouseEvent) => {
    const offsetX = e.nativeEvent.offsetX;
    const offsetY = e.nativeEvent.offsetY;

    over(offsetX, offsetY);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    const eventTarget = e.target as HTMLDivElement;
    const offset = eventTarget.getBoundingClientRect();

    const offsetX = e.touches[0].clientX - offset.x;
    const offsetY = e.touches[0].clientY - offset.y;

    over(offsetX, offsetY);
  };

  const onMouseAndTouchLeaveEvent = () => {
    if (cardRef.current) {
      cardRef.current.style.setProperty(
        "transform",
        "rotateX(0deg) rotateY(0deg) scale(1)"
      );
      cardRef.current.style.setProperty("filter", "brightness(1)");
    }
  };

  return (
    <Card perspective={perspective} haveParentComponent={haveParentComponent}>
      <div
        onTouchMove={(e) => onTouchMove(e)}
        onTouchEnd={onMouseAndTouchLeaveEvent}
        onMouseMove={(e) => onMouseOver(e)}
        onMouseLeave={onMouseAndTouchLeaveEvent}
        ref={cardRef}
      >
        {children}
      </div>
    </Card>
  );
};

const Card = styled.div<{
  perspective?: number;
  haveParentComponent?: boolean;
}>`
  ${(props) =>
    props.haveParentComponent &&
    css`
      width: 100%;
      height: 100%;
    `}

  display: inline-block;
  transition: 0.5s;
  perspective: ${(props) =>
    props.perspective ? `${props.perspective}px` : "1000px"};

  & > :first-child {
    width: 100%;
    height: 100%;
    transition: all 0.3s ease-out;
  }
`;

export default React.memo(Card3D);
