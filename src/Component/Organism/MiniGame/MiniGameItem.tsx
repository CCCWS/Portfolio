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

const MiniGameItem = ({
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
        <Front>?</Front>
        <Back>{data}</Back>
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

  backface-visibility: hidden;
`;

const Front = styled(CardDiv)`
  transform: rotateY(0deg);
  background-color: #bdbdbd;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.5rem;

  color: gray;

  &:hover {
    background-color: #a1a1a1;
  }
`;

const Back = styled(CardDiv)`
  transform: rotateY(-180deg);

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.5rem;

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
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
  transform-style: preserve-3d;

  transform: ${(props) =>
    props.$firstClick || props.$secondClick
      ? "rotateY(180deg)"
      : "rotateY(0deg)"};
  transform: ${(props) => props.$clearCheck && "rotateY(180deg)"};

  ${Back} {
    background-color: ${(props) => (props.$clearCheck ? "#5cf05c" : "white")};
  }

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
  }
`;

export default React.memo(MiniGameItem);
