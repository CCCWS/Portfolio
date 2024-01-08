import React, { useState } from "react";
import styled, { css } from "styled-components";

const Test = () => {
  const [onClick, setOnclick] = useState<boolean>(false);
  const items = ["item 1", "item 2", "item 3", "item 4", "item 5"];
  return (
    <>
      <Box>
        <Div clickCheck={onClick}>
          {items.map((data, index) => (
            <Item key={index} clickCheck={onClick}>
              {data}
            </Item>
          ))}
          <Div1
            clickCheck={onClick}
            onClick={() => setOnclick((prev) => !prev)}
          ></Div1>
        </Div>
      </Box>

      <Testt clickCheck={onClick}>
        <div></div>
        <div></div>
        <div></div>
      </Testt>
    </>
  );
};

const Testt = styled.div<{ clickCheck: boolean }>`
  background-color: gray;

  width: 500px;
  height: 500px;

  display: flex;

  align-items: flex-end;
  justify-content: space-around;

  div {
    width: 50px;
    height: 50px;
    background-color: red;
    /* transition: 0.5s; */
    border-radius: 30px;
  }

  & > :first-child {
    transition: 0.3s 0.3s;
    ${(props) =>
      props.clickCheck &&
      css`
        transform: translateY(-100px);
      `}
  }

  & > :nth-child(2) {
    transition: 0.6s 0.6s;
    ${(props) =>
      props.clickCheck &&
      css`
        transform: translateY(-200px);
      `}
  }

  & > :last-child {
    transition: 0.9s 0.9s;
    ${(props) =>
      props.clickCheck &&
      css`
        transform: translateY(-300px);
      `}
  }
`;

const Box = styled.div`
  /* padding: 50px; */
  /* margin: 50px; */
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;

  /* background-color: blue; */

  Item {
  }
`;

const Div = styled.div<{ clickCheck: boolean }>`
  /* margin: 50px; */
  background-color: white;
  width: ${(props) => (props.clickCheck ? "100%" : "50px")};
  height: 50px;

  border-radius: 50px;

  transition: 0.3s 0.3s;
  /* transition-delay: 0.3s; */

  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Div1 = styled.div<{ clickCheck: boolean }>`
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  transition: 0.3s 0.3s;
  /* transition-delay: 0.3s; */
  background-color: white;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  ${(props) =>
    props.clickCheck &&
    css`
      transform: translateY(60px);
      background-color: red;
      transition-delay: 0s;
      width: 30px;
      height: 30px;
    `}

  &::before {
    content: "";
    position: absolute;
    width: 30px;
    height: 3px;
    background-color: black;
    transform: translateY(-5px);
    transition: 0.3s;

    ${(props) =>
      props.clickCheck &&
      css`
        background-color: white;
        transform: translateY(0px) rotate(45deg) scale(0.7);
      `}
  }

  &::after {
    content: "";
    position: absolute;
    width: 30px;
    height: 3px;
    background-color: black;
    transform: translateY(5px);
    transition: 0.3s;

    ${(props) =>
      props.clickCheck &&
      css`
        background-color: white;
        transform: translateY(0px) rotate(315deg) scale(0.7);
      `}
  }
`;

const Item = styled.div<{ clickCheck: boolean }>`
  transition: 0.5s;
  transform: scale(0);

  ${(props) =>
    props.clickCheck &&
    css`
      transform: scale(1);
      transition-delay: 0.6s;
    `}
`;

export default Test;
