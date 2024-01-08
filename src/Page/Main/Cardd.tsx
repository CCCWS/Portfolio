import React, { useState } from "react";
import styled from "styled-components";
import Card3D from "@Component/Molecule/Card3D";

const Cardd = () => {
  return (
    <>
      <Div>
        <Carddd>
          <Front>Front</Front>
          <Back>Back</Back>
        </Carddd>
      </Div>
    </>
  );
};
const Carddd = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transition: 1s;
  transform-style: preserve-3d;
`;

const Div = styled.div`
  width: 200px;
  height: 250px;
  perspective: 1100px;

  /* background-color: red; */

  &:hover {
    ${Carddd} {
      transform: rotateY(180deg);
    }
  }
`;

const Front = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;

  color: white;
  font-size: 1.5rem;

  transform: rotateY(0deg);
  background-color: white;
`;

const Back = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;

  color: white;
  font-size: 1.5rem;

  transform: rotateY(-180deg);
  background-color: black;
`;

export default Cardd;
