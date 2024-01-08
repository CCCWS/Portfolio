import React, { useCallback, useEffect, useMemo, useState } from "react";
import styled, { css } from "styled-components";
import MiniGameItem from "./MiniGameItem";
import MiniGameItemVer2 from "./MiniGameItemVer2";

interface MiniGameProps {
  btnClick: boolean;
}

const MiniGame = ({ btnClick }: MiniGameProps) => {
  const animationDuration: number = 3;
  const itemBase: number[] = useMemo(() => [1, 2, 3, 4, 5, 6, 7, 8], []);

  //itemBase를 2배로 복사후 랜덤정렬
  const randomItem: number[] = useMemo(
    () => itemBase.concat(itemBase).sort(() => Math.random() - 0.5),
    [itemBase]
  );

  //randomItem 길이 만큼의 랜덤한 수의 숫자를 가진 배열 생성
  const randomIndex = Array.from({ length: randomItem.length }, () =>
    Math.floor(Math.random() * 1000000000)
  );

  const [start, setStart] = useState<boolean>(false);

  const [itemArr, setItemArr] = useState<number[]>(randomItem);
  const [itemIndex, setItemIndex] = useState<number[]>(randomIndex);

  const [firstClick, setFirstClick] = useState<number[]>([]);
  const [secondClick, setSecondClick] = useState<number[]>([]);
  const [clearItem, setClearItem] = useState<number[]>([]);

  const [clickPossible, setClickPossible] = useState<boolean>(false);

  useEffect(() => {
    //처음 로딩이 끝난후 일정시간 클릭 불가 처리
    const delay: number =
      (animationDuration + (randomItem.length - 1) / 4) * 1000;

    const clickPossibleTimeOut = () =>
      setTimeout(() => setClickPossible(true), delay);

    start && clickPossibleTimeOut();

    return () => clearTimeout(clickPossibleTimeOut());
  }, [randomItem, start]);

  const onClickReset = () => {
    const resetItem: number[] = itemBase
      .concat(itemBase)
      .sort(() => Math.random() - 0.5);

    const resetIndex: number[] = Array.from({ length: randomItem.length }, () =>
      Math.floor(Math.random() * 1000000000)
    );

    if (!clickPossible) {
      return;
    }

    setStart(false);
    setItemArr(resetItem);
    setItemIndex(resetIndex);
    firstClick.length > 0 && setFirstClick([]);
    clearItem.length > 0 && setClearItem([]);
    setClickPossible(false);
  };

  const onClickItem = useCallback(
    (index: number, data: number) => {
      if (!clickPossible) {
        return;
      }

      if (clearItem.includes(data)) {
        return;
      }

      if (firstClick[0] === index && firstClick[1] === data) {
        console.log("중복클릭");
        return;
      }

      if (firstClick.length === 0) {
        console.log("처음클릭");
        setFirstClick([index, data]);
        return;
      }

      if (firstClick.length > 0) {
        console.log("두번째클릭");
        setSecondClick([index, data]);
        setClickPossible(false);
        return;
      }
    },
    [clearItem, clickPossible, firstClick]
  );

  useEffect(() => {
    let clickDelay: number = 1000;

    //두번째 클릭 이후에 실행
    if (secondClick.length > 0) {
      //클릭한 두개가 같다면 통과처리
      if (firstClick[1] === secondClick[1]) {
        setClearItem((prev) => [...prev, secondClick[1]]);
        clickDelay = 0;
      }

      const clickInit = setTimeout(() => {
        setFirstClick([]);
        setSecondClick([]);
        setClickPossible(true);
      }, clickDelay);

      return () => clearTimeout(clickInit);
    }
  }, [firstClick, secondClick]);

  return (
    <Body>
      <Div>
        <ResetBtn onClick={onClickReset}>RESET</ResetBtn>

        {itemArr.map((data, index) => (
          // <MiniGameItem
          //   key={itemIndex[index]}
          //   onClickItem={onClickItem}
          //   firstClick={firstClick[0] === index && firstClick[1] === data}
          //   secondClick={secondClick[0] === index && secondClick[1] === data}
          //   clearCheck={clearItem.includes(data)}
          //   animationduration={animationDuration}
          //   start={start}
          //   index={index}
          //   data={data}
          // />

          <MiniGameItemVer2
            key={itemIndex[index]}
            onClickItem={onClickItem}
            firstClick={firstClick[0] === index && firstClick[1] === data}
            secondClick={secondClick[0] === index && secondClick[1] === data}
            clearCheck={clearItem.includes(data)}
            animationduration={animationDuration}
            start={start}
            index={index}
            data={data}
          />
        ))}

        {!start && (
          <StartBtn>
            <button
              onClick={() => {
                setStart(true);
                clickPossible && setClickPossible(false);
              }}
            >
              START
            </button>
          </StartBtn>
        )}

        <ClearNotification $clearCheck={clearItem.length === itemBase.length}>
          CLEAR !!!
        </ClearNotification>
      </Div>
    </Body>
  );
};

const Body = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Div = styled.div`
  width: 75%;
  height: 75%;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 10px;

  position: relative;
`;

const ResetBtn = styled.button`
  position: absolute;
  width: 50px;
  height: 30px;

  top: -30px;
  left: 50%;
  transform: translate(-50%, -50%);

  border: 2px solid transparent;
  border-radius: 10px;

  transition: 0.5s;

  &:hover {
    background-color: #929292;
  }
`;

const StartEndBase = styled.div`
  position: absolute;
  width: 100%;
  background-color: #747474d5;
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
`;

const StartBtn = styled(StartEndBase)`
  height: 100%;

  button {
    color: white;
    border: none;
    background-color: transparent;
    font-size: 1.3rem;

    transition: 0.5s;

    &:hover {
      font-size: 1.5rem;
    }
  }
`;

const ClearNotification = styled(StartEndBase)<{ $clearCheck: boolean }>`
  height: 0%;
  opacity: 0;

  font-size: 1.5rem;

  ${(props) =>
    props.$clearCheck &&
    css`
      transition: opacity 0.5s;
      opacity: 1;
      height: 100%;
    `}
`;

export default React.memo(MiniGame);
