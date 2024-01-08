import React from "react";
import styled from "styled-components";

interface Props {
  onClickItem: any;
  firstClick: boolean;
  secondClick: boolean;
  clearCheck: boolean;
  animationduration: number;
  index: number;
  data: number;
  start: boolean;
}

const MiniGameItemVer2 = ({
  onClickItem,
  firstClick,
  secondClick,
  clearCheck,
  animationduration,
  index,
  data,
  start,
}: Props) => {
  return (
    <Item onClick={() => onClickItem(index, data)}>
      <ItemDiv
        $firstClick={firstClick}
        $secondClick={secondClick}
        $clearCheck={clearCheck}
        $start={start}
        animationduration={animationduration}
        delay={index / 4}
      >
        <Front>
          {data}
          <FrontScreen
            $firstClick={firstClick}
            $secondClick={secondClick}
            $clearCheck={clearCheck}
            $start={start}
            animationduration={animationduration}
            delay={index / 4}
          ></FrontScreen>
        </Front>
      </ItemDiv>
    </Item>
  );
};

const Item = styled.div`
  perspective: 500px;
`;

const CardDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border: 1px solid gray;
  transition: 0.5s;

  &:hover {
    cursor: pointer;
  }
`;

const Front = styled(CardDiv)`
  transform: rotateY(0deg);
  background-color: #bdbdbd;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;

  font-size: 1.5rem;

  color: gray;

  overflow: hidden;

  &:hover {
    background-color: #a1a1a1;
  }
`;

const FrontScreen = styled.div<{
  $firstClick: boolean;
  $secondClick: boolean;
  $clearCheck: boolean;
  $start: boolean;
  animationduration: number;
  delay: number;
}>`
  inset: 0;
  position: absolute;
  transition: 0.5s;

  border-radius: inherit;

  background-color: #ffb2b2;

  transform: ${(props) =>
    props.$firstClick || props.$secondClick
      ? "translateY(-100%)"
      : "translateY(0)"};
  transform: ${(props) => props.$clearCheck && "translateY(-100%)"};

  animation-name: rotate;
  animation-duration: ${(props) => `${props.animationduration}s`};
  animation-delay: ${(props) => `${props.delay}s`};
  animation-play-state: ${(props) => (props.$start ? "start" : "paused")};

  @keyframes rotate {
    0% {
      transform: translateY(0deg);
    }

    50% {
      transform: translateY(-100%);
    }

    100% {
      transform: translateY(0deg);
    }
  }
`;

const ItemDiv = styled.div<{
  $firstClick: boolean;
  $secondClick: boolean;
  $clearCheck: boolean;
  $start: boolean;
  animationduration: number;
  delay: number;
}>`
  width: 100%;
  height: 100%;

  position: relative;
  transition: 0.8s;
  /* transform-style: preserve-3d; */

  /* transform: ${(props) =>
    props.$firstClick || props.$secondClick
      ? "rotateY(180deg)"
      : "rotateY(0deg)"};
  transform: ${(props) => props.$clearCheck && "rotateY(180deg)"};

  animation-name: rotate;
  animation-duration: ${(props) => `${props.animationduration}s`};
  animation-delay: ${(props) => `${props.delay}s`};
  animation-play-state: ${(props) => (props.$start ? "start" : "paused")};

  @keyframes rotate {
    0% {
      transform: rotateY(0deg);
    }

    50% {
      transform: rotateY(180deg);
    }

    100% {
      transform: rotateY(0deg);
    }
  } */
`;

export default React.memo(MiniGameItemVer2);
