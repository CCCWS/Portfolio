import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";

import Button from "@Component/Atom/Button";
import HamburgerBtn from "@Component/Atom/HamburgerBtn";

interface Path {
  title: string;
  path: string;
}

const TestHeader = () => {
  const nav = useNavigate();
  const [onClickBtn, setOnClickBtn] = useState<boolean>(false);
  const pathArr: Path[] = [
    { title: "MAIN", path: "/" },
    { title: "ABOUT", path: "/about" },
    { title: "PROJECT", path: "/project" },
  ];

  const onMovePage = (path: string) => {
    // setOnClickBtn(false);
    nav(path);
  };
  return (
    <div>
      <Btn onClick={() => setOnClickBtn((prev) => !prev)}>
        <MenuOpenButtonBox>
          <HamburgerBtn btnClick={onClickBtn} setBtnClick={setOnClickBtn} />
        </MenuOpenButtonBox>

        <Menu clickBtn={onClickBtn}>
          {pathArr.map((data, index) => (
            <Button
              key={index}
              width={"80%"}
              height={"40px"}
              innerText={data.title}
              onClickEvent={() => onMovePage(data.path)}
            />
          ))}
        </Menu>
      </Btn>

      {onClickBtn && <Background onClick={() => setOnClickBtn(false)} />}
    </div>
  );
};

const Btn = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${(props) => props.theme.color.red_transparency};

  padding: 8px;
  margin: 20px;

  border-radius: 50%;
  border: none;
  box-shadow: 0px 0px 5px 0px gray;

  position: fixed;
  right: 0;
  top: 0;

  z-index: 100;
  transition: 0.5s;

  &:hover {
    background-color: #790000;
    cursor: pointer;
  }
`;

const MenuOpenButtonBox = styled.div`
  width: 100%;
  height: 100%;
`;

const Menu = styled.div<{ clickBtn: boolean }>`
  width: 50px;
  height: 0px;
  background-color: white;

  position: absolute;
  right: 0;
  top: calc(100% + 10px);

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  overflow: hidden;
  border-radius: 10px;
  transition: height 0.3s 0.3s, width 0.3s;

  ${(props) =>
    props.clickBtn &&
    css`
      transition: height 0.3s, width 0.3s 0.3s;

      height: 200px;
      width: 150px;
    `}
`;

const Background = styled.div`
  position: absolute;
  inset: 0;
  z-index: 10;
`;

export default TestHeader;
