import styled, { css } from "styled-components";

export const Page = styled.div`
  width: 100vw;
  height: 100vh;

  /* padding: 20px; */
  /* background-color: ${(props) => props.theme.color.black}; */

  /* background: linear-gradient(45deg, #6be585, #dd3e54); */
  /* position: relative; */

  overflow-x: hidden;
  overflow-y: scroll;
  overflow: overlay;
`;

export const PageDiv = styled.div`
  width: 100%;
  height: 300vh;
`;
