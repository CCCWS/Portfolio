import React, { useState } from "react";
import styled from "styled-components";

import MiniGame from "./MiniGame";

const MIniGameBtn = () => {
  const [btnClick, setBtnClick] = useState<boolean>(false);
  return (
    <>
      <Body btnClick={btnClick} onClick={() => setBtnClick(!btnClick)} />
      <Div btnClick={btnClick}>
        <div>
          <MiniGame btnClick={btnClick} />
        </div>
        <OpenBtn onClick={() => setBtnClick(!btnClick)}>
          <Label>
            <div>Mini Game</div>
          </Label>
        </OpenBtn>
      </Div>
    </>
  );
};

const Body = styled.div<{ btnClick: boolean }>`
  width: 100vw;
  height: 100vh;

  position: absolute;

  background-color: #53535352;
  z-index: 1000;

  display: ${(props) => !props.btnClick && "none"};
`;

const Div = styled.div<{ btnClick: boolean }>`
  width: 500px;
  height: 500px;
  z-index: 1000;

  position: absolute;
  left: 0;
  top: 10%;

  will-change: transform;
  transition: 0.5s;
  transform: ${(props) =>
    props.btnClick ? "translateX(0)" : "translateX(-100%)"};

  @media (max-width: 750px) {
    width: 90%;
    /* height: 50%; */
  }

  @media (max-height: 600px) {
    height: 80%;
  }

  & > :first-child {
    width: 100%;
    height: 100%;

    position: relative;

    background-color: #969696a4;
    border-radius: 0px 0px 10px 0px;
    /* opacity: ${(props) => (props.btnClick ? "1" : "0")}; */
    transition: 0.5s;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const OpenBtn = styled.button`
  width: 30px;
  height: 150px;

  position: absolute;
  right: -30px;
  top: 0;

  border-radius: 0px 10px 10px 0px;
  border: none;
  font-size: 1rem;

  background-color: #969696a4;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;

  &:hover {
    /* cursor: pointer; */

    background-color: #6b6b6ba3;
  }
`;

const Label = styled.div`
  position: relative;

  &:first-child {
    position: absolute;
    transform: rotate(90deg);
    white-space: nowrap;
  }
`;

export default React.memo(MIniGameBtn);
