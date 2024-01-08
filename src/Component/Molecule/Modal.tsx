import React, { useState } from "react";
import ReactDom from "react-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";

import "@Style/Modal.css";

interface props {
  children: React.ReactNode;
  onModalOpen: boolean;
  setOnModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({ children, onModalOpen, setOnModalOpen }: props) => {
  const onBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setOnModalOpen(false);
    }
  };

  return ReactDom.createPortal(
    <TransitionGroup>
      {onModalOpen && (
        <CSSTransition in={true} classNames="modal" timeout={200}>
          <Div onClick={onBackgroundClick}>
            <CloseBtn onClick={() => setOnModalOpen(false)} />
            {children}
          </Div>
        </CSSTransition>
      )}
    </TransitionGroup>,
    document.querySelector("#modal-portal") as HTMLElement
  );
};

const Div = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;

  position: absolute;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  z-index: 1000;
`;

const CloseBtn = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 20px;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 20px;

  transition: 0.3s;

  &:hover {
    background-color: #ff00009b;
  }

  &::before {
    content: "X";
    font-size: 1.2rem;
  }
`;

export default Modal;
