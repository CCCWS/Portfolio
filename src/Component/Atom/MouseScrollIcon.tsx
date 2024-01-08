import React from "react";
import styled from "styled-components";

const MouseScrollIcon = () => {
  return <Div></Div>;
};

const Div = styled.div`
  width: 30px;
  height: 50px;
  box-shadow: inset 0 0 0 3px #fff;
  border-radius: 25px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    width: 10px;
    height: 10px;
    background: #fff;
    margin-left: -4px;
    top: 8px;
    border-radius: 4px;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    animation-name: scroll;

    @keyframes scroll {
      0% {
        opacity: 1;
      }

      100% {
        opacity: 0;
        transform: translateY(30px);
      }
    }
  }
`;

export default MouseScrollIcon;
