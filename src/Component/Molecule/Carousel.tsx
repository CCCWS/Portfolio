import React, { useCallback, useEffect, useState, useRef } from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode[];
  height: string;
  point?: boolean;
  nextBtn?: boolean;
  transitionDuration: number;
}

const Carousel = ({
  children,
  height,
  point,
  nextBtn,
  transitionDuration,
}: Props) => {
  const checkOneChildren = children.length === undefined && true;

  const [component, setComponent] = useState<React.ReactNode[]>([]);
  const [location, setLocation] = useState<number>(checkOneChildren ? 0 : 1);
  const [duration, setDuration] = useState<number>(transitionDuration);

  useEffect(() => {
    const initComponet = () => {
      const firstChild = children[0];
      const lastChild = children[children.length - 1];

      setComponent([lastChild, ...children, firstChild]);
    };

    initComponet();
  }, [children, checkOneChildren]);

  useEffect(() => {
    const moveLocation = (n: number) => {
      setDuration(0);
      setTimeout(() => {
        setLocation(n);
      }, transitionDuration);
    };

    if (checkOneChildren) {
      return;
    } else {
      if (location === 0) moveLocation(component.length - 2);
      if (location === component.length - 1) moveLocation(1);
    }
  }, [children, checkOneChildren, location, component, transitionDuration]);

  const resetDuration = useCallback(() => {
    if (duration === 0) setDuration(transitionDuration);
  }, [duration, transitionDuration]);

  const onPrev = () => {
    if (location === 0) return;

    resetDuration();
    setLocation((prev) => prev - 1);
  };

  const onNext = useCallback(() => {
    if (location === component.length - 1) return;

    resetDuration();
    setLocation((prev) => prev + 1);
  }, [component, location, resetDuration]);

  const clickPoint = (item: number) => {
    resetDuration();
    setLocation(item);
  };

  return (
    <Div height={height}>
      <Section>
        {component.map((data, index) => (
          <ItemDiv key={index} location={location} duration={duration}>
            {data}
          </ItemDiv>
        ))}
      </Section>

      {!checkOneChildren && point && (
        <PointBox>
          {children.map((data, index) => (
            <Point
              key={index + 1}
              currLocation={index + 1 === location}
              duration={transitionDuration}
              onClick={() => clickPoint(index + 1)}
            />
          ))}
        </PointBox>
      )}

      {!checkOneChildren && nextBtn && (
        <>
          <Button prev={true} onClick={onPrev}>
            <div />
          </Button>

          <Button next={true} onClick={onNext}>
            <div />
          </Button>
        </>
      )}
    </Div>
  );
};

const Div = styled.div<{ height: string }>`
  width: 100%;
  height: ${(props) => props.height};
  position: relative;
  overflow: hidden;

  border-radius: inherit;
`;

const Section = styled.div`
  width: inherit;
  height: inherit;
  display: flex;
  flex-flow: column wrap;
  position: absolute;
`;

const ItemDiv = styled.div<{ location: number; duration: number }>`
  width: inherit;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;

  transform: ${(props) => `translateX(-${props.location}00%)`};
  transition: ${(props) => `${props.duration}ms`};
`;

const PointBox = styled.div`
  width: 50%;
  height: 50px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Point = styled.div<{ currLocation: boolean; duration: number }>`
  width: 10px;
  height: 10px;
  margin: 5px;
  border-radius: 30px;

  transition: ${(props) => `${props.duration}ms`};
  background-color: ${(props) => (props.currLocation ? "black" : "#b4b4b4")};
  transition: 0.5s;

  &:hover {
    background-color: black;
  }
`;

const Button = styled.button<{ prev?: boolean; next?: boolean }>`
  position: absolute;
  top: 0;
  left: ${(props) => props.prev && "0"};
  right: ${(props) => props.next && "0"};
  width: 40px;
  height: 100%;
  font-size: 2rem;
  padding: 10px;
  border: none;
  background-color: transparent;
  &:hover {
    /* cursor: pointer; */
    background-color: rgba(112, 112, 112, 0.3);
  }
  div {
    width: 100%;
    height: 40px;
    background-color: #4d4d4d;
    clip-path: ${(props) =>
      props.prev && "polygon(100% 0, 100% 0%, 100% 100%, 100% 100%, 0% 50%)"};
    clip-path: ${(props) =>
      props.next && "polygon(0 0, 0 0, 0 100%, 0 100%, 100% 50%)"};
  }
`;

export default Carousel;
