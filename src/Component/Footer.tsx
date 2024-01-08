import React from "react";
import styled from "styled-components";
import waveImg from "@Data/image/wave.png";

const Footer = () => {
  return (
    <Div>
      <Waves img={waveImg}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </Waves>
    </Div>
  );
};

const Div = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  /* height: 100px; */
  background-color: #3586ff;
`;

const Waves = styled.div<{ img: ImageData }>`
  /* position: absolute;
  top: -100px;
  left: 0;
  width: 100%;
  height: 100px;
  background: ${(props) => `red url(${props.img})`};
  background-size: 1000px 100px; */

  div {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background: ${(props) => `url(${props.img})`};
    background-size: 1000px 60px;
  }

  & > :first-child {
    animation: animateWave 4s linear infinite;
    z-index: 1000;
    opacity: 1;
    bottom: 0;
  }

  & > :nth-child(2) {
    animation: animateWave_2 3s linear infinite;
    z-index: 999;
    opacity: 0.5;
    bottom: 10px;
  }

  & > :nth-child(3) {
    animation: animateWave 2s linear infinite;
    z-index: 1000;
    opacity: 0.2;
    bottom: 15px;
  }

  & > :nth-child(4) {
    animation: animateWave_2 2s linear infinite;
    z-index: 999;
    opacity: 0.7;
    bottom: 20px;
  }

  @keyframes animateWave {
    0% {
      background-position-x: 1000px;
    }

    100% {
      background-position-x: 0px;
    }
  }

  @keyframes animateWave_2 {
    0% {
      background-position-x: 0px;
    }

    100% {
      background-position-x: 1000px;
    }
  }
`;

export default Footer;
