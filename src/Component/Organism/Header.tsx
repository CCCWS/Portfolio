import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <Div>
      <StyledLink to="/">Home</StyledLink>

      <StyledLink to="/about">About</StyledLink>

      <StyledLink to="/project">Project</StyledLink>
    </Div>
  );
};

const Div = styled.div`
  width: 100%;
  height: 50px;

  /* backdrop-filter: blur(20px); */
  background-color: transparent;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  position: sticky;
  top: 0;
  z-index: 1;
`;

const StyledLink = styled(NavLink)`
  width: 100px;
  height: 40px;
  margin-right: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: black;
  text-decoration: none;

  background-color: transparent;
  border-radius: 5px;
  position: relative;
  transition: 0.5s;

  overflow: hidden;

  &:hover {
    color: white;
    cursor: pointer;
  }

  &::before {
    content: "";
    position: absolute;
    width: 0;
    height: 100%;
    background-color: #9e9e9e;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.5s ease 0.3s;
  }

  &:hover::before {
    width: 100%;
  }

  &.active {
    background-color: #9e9e9e;
  }
`;
export default Header;
