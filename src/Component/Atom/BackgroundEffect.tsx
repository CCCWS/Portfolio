import React from "react";
import styled from "styled-components";

const BackgroundEffect = () => {
  const itemLength = Array.from({ length: 200 }, (v, i) => i);

  const randomColor = () => {
    const num = Math.floor(Math.random() * itemLength.length);
  };

  return (
    <Div>
      {itemLength.map((data) => (
        <Box key={data} />
      ))}
    </Div>
  );
};

const Div = styled.div`
  position: relative;

  width: 100vw;
  height: 100vh;

  background-color: black;

  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;
`;

const Box = styled.div`
  position: relative;

  width: 100px;
  height: 100px;
  background-color: gray;
  /* border: 1px solid gray; */
`;

export default BackgroundEffect;
