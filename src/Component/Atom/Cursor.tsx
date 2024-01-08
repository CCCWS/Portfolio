import React, { useRef, useLayoutEffect } from "react";
import styled from "styled-components";

const Cursor = () => {
  const cursorRef = useRef<any>(null);

  useLayoutEffect(() => {
    // console.log(cursorRef.current!.offsetLeft);
    // console.log(cursorRef.current!.offsetTop);

    document.addEventListener("mousemove", (e) => {
      cursorRef.current!.style.top = e.pageY + "px";
      cursorRef.current!.style.left = e.pageX + "px";
    });
  }, [cursorRef]);

  return <CursorDiv ref={cursorRef}></CursorDiv>;
};

export const CursorDiv = styled.div`
  position: fixed;
  width: 25px;
  height: 25px;
  border-top: 5px solid #0f0;
  border-left: 5px solid #0f0;

  transform-origin: top;
  transform: translate(-1px, 5px) rotate(15deg);
  pointer-events: none;

  animation: cursorAnimate 1s linear infinite;
  z-index: 100000;
  opacity: 0;


  @keyframes cursorAnimate {
    0% {
      filter: drop-shadow(0 0 1px #0f0) drop-shadow(0 0 7px #0f0)
        drop-shadow(0 0 15px #0f0) hue-rotate(0deg);
    }

    100% {
      filter: drop-shadow(0 0 1px #0f0) drop-shadow(0 0 7px #0f0)
        drop-shadow(0 0 15px #0f0) hue-rotate(360deg);
    }
  }

  &::before {
    content: "";
    position: absolute;
    left: -2.5px;
    width: 5px;
    height: 30px;
    background-color: #0f0;
    transform-origin: top;
    transform: rotate(315deg);
  }
`;

export default Cursor;
