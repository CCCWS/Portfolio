import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import {
  TransitionGroup,
  CSSTransition,
  SwitchTransition,
} from "react-transition-group";
import styled, { ThemeProvider } from "styled-components";

import GlobalStyle from "@Style/GlobalStyle";
import theme from "./Style/Theme";

import Main from "@Page/Main/Main";
import About from "@Page/About/About";
import Project from "@Page/Project/Project";
import TestHeader from "@Component/Organism/TestHeader";
import MIniGameBtn from "@Component/Organism/MiniGame/MIniGameBtn";
import Cursor from "@Component/Atom/Cursor";
import Header from "@Component/Organism/Header";
import Footer from "@Component/Footer";

import RouteTransition from "@Component/Atom/RouteTransition";

import "@Style/Layout.css";

function App() {
  const location = useLocation();
  const { pathname } = useLocation();

  // useEffect(() => {
  //   console.log(pathname);
  // }, [pathname]);

  return (
    <ThemeProvider theme={theme}>
      {/* <Cursor /> */}
      <GlobalStyle />
      {pathname !== "/" && <TestHeader />}
      {pathname !== "/" && <MIniGameBtn />}
      {/* <Header /> */}
      {/* <Footer /> */}

      {/* <SwitchTransition>
        <CSSTransition
          key={location.pathname}
          timeout={300}
          classNames="page"
          unmountOnExit
        >
        </CSSTransition>
      </SwitchTransition> */}
      <Routes>
        <Route path={"/"} element={<Main />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/project"} element={<Project />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
