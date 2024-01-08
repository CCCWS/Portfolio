import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

interface Props {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const MainLoading = ({ loading, setLoading }: Props) => {
  const word: string = "WELCOME";
  const location: string[] = ["up", "down"];

  useEffect(() => {
    const tick = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(tick);
  }, [setLoading]);

  return (
    <>
      {location.map((location, index) => (
        <Div key={index} location={location} isLoading={loading}>
          <div>
            <WordDiv location={location}>{word}</WordDiv>
          </div>
        </Div>
      ))}
    </>
  );
};

const Div = styled.div<{ location: string; isLoading: boolean }>`
  width: 100%;
  height: 50%;

  position: fixed;
  z-index: 1000;

  top: ${(props) => props.location === "up" && "0"};
  bottom: ${(props) => props.location === "down" && "0"};

  transition: 0.5s;

  & > :first-child {
    position: relative;
    width: 100%;
    height: 100%;
  }

  ${(props) =>
    !props.isLoading &&
    css`
      transform: ${() =>
        props.location === "up" ? "translateX(-10%)" : "translateX(10%)"};
      visibility: hidden;
      opacity: 0;

      @media (max-width: 750px) {
        transform: ${() =>
          props.location === "up" ? "translateY(-20%)" : "translateY(20%)"};
      }
    `}
`;

const WordDiv = styled.div<{ location: string }>`
  position: absolute;
  left: 50%;

  width: 100%;
  height: 150px;

  text-align: center;
  font-size: 150px;

  transform: translate(-50%, 0%);
  grid-area: 1/1/-1/-1;

  color: white;
  -webkit-text-stroke: 2px gray;
  text-shadow: 0px 0px 2rem red;

  ${(props) =>
    props.location === "up" &&
    css`
      bottom: -75px;
      clip-path: polygon(0% 0%, 100% 0%, 100% 50%, 0% 50%);

      @media (max-width: 750px) {
        bottom: -50px;
      }
    `}

  ${(props) =>
    props.location === "down" &&
    css`
      top: -76px;
      clip-path: polygon(0% 50%, 100% 50%, 100% 100%, 0% 100%);

      @media (max-width: 750px) {
        top: -51px;
      }
    `};

  @media (max-width: 750px) {
    font-size: 100px;
    height: 100px;
  }
`;

export default React.memo(MainLoading);
