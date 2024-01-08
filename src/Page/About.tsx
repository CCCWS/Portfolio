import React, {
  useCallback,
  useEffect,
  useState,
  useLayoutEffect,
  useRef,
} from "react";
import styled, { css } from "styled-components";

import { Page, PageDiv } from "@Style/PageStyle";

import Card3D from "@Component/Molecule/Card3D";

const About = () => {
  const [click, setClick] = useState<boolean>(false);

  return (
    <Page>
      <T>
        <Card3D haveParentComponent={true}>
          <Test></Test>
        </Card3D>
      </T>
    </Page>
  );
};

const T = styled.div`
  width: 300px;
  height: 500px;
  /* background-color: black; */
  padding: auto;

  margin: 100px;
`;
const Test = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
`;

const Div = styled.div`
  width: 50px;
  height: 50px;
  /* background-color: white; */
  margin: 100px;
  border-radius: 100%;
  border: 3px solid transparent;
  border-top: 3px solid red;
  border-bottom: 3px solid red;

  animation-name: spin;
  animation-duration: 1s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default About;
