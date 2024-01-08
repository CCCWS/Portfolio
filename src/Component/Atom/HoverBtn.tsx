import React, { useState } from "react";
import styled, { css } from "styled-components";

interface menuItemTpye {
  title: string;
  location: string;
}

const HoverBtn = () => {
  const menuItemArr: menuItemTpye[] = [
    { title: "A", location: "top : -50%" },
    { title: "B", location: "top : -25%; left : 125%" },
    { title: "C", location: "left : 150%" },
    { title: "D", location: "top : 125%; left : 125%" },
    { title: "E", location: "top : 150%" },
    { title: "F", location: "top : 125%; left : -25%" },
    { title: "G", location: "left : -50%" },
    { title: "H", location: "top : -25%; left : -25%" },
  ];

  const [menuClick, setMenuClick] = useState<boolean>(false);

  return (
    <Box>
      <MenuBtn onClick={() => setMenuClick(!menuClick)}>
        {menuItemArr.map((data, index) => (
          <MenuItem
            key={index}
            location={data.location}
            menuClick={menuClick}
            delay={index}
          >
            {data.title}
          </MenuItem>
        ))}
      </MenuBtn>
    </Box>
  );
};

const Box = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 200px;
`;

const MenuBtn = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: white;

  position: relative;

  z-index: 200;
`;

const MenuItem = styled.div<{
  menuClick: boolean;
  location: string;
  delay: number;
}>`
  width: 20px;
  height: 20px;
  border-radius: 100px;
  background-color: red;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  transition: 0.5s;
  transition-delay: ${(props) =>
    props.menuClick ? `${props.delay / 20}s` : "0"};

  display: flex;
  justify-content: center;
  align-items: center;

  opacity: 0;

  ${(props) =>
    props.menuClick &&
    css`
      opacity: 1;
      ${() => props.location}
    `}
`;

export default HoverBtn;
