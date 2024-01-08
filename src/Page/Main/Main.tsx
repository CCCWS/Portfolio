import React, { useEffect, useState, useMemo, useCallback } from "react";
import styled, { css } from "styled-components";
import MainLoading from "./MainLoading";
import Card from "./Card";

import { Page } from "@Style/PageStyle";
import "@Style/Layout.css";

import gitHubImg from "@Data/icon/github.png";
import aboutImg from "@Data/icon/about.png";
import projectImg from "@Data/icon/react_black.png";
import enterImg from "@Data/icon/enter.png";
import clickImg from "@Data/icon/click.png";

interface CardType {
  title: string;
  left: number;
  delay: number;
  image: string;
  path: string;
  newPage?: boolean;
}

const Main = () => {
  const cardArr: CardType[] = [
    { title: "ABOUT", left: 20, delay: 0, path: "/about", image: aboutImg },
    {
      title: "PROJECT",
      left: 50,
      delay: 0.2,
      path: "/project",
      image: projectImg,
    },
    {
      title: "GIT HUB",
      left: 80,
      delay: 0.4,
      path: "https://github.com/CCCWS",
      image: gitHubImg,
      newPage: true,
    },
  ];

  const message: string[] = useMemo(() => ["테스트1", "테스트2"], []);
  const [messageIndex, setMessageIndex] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  const onClickMessage = useCallback(() => {
    setMessageIndex((prev) => prev + 1);
  }, []);

  useEffect(() => {
    window.onkeydown = (e) => {
      if (!loading && messageIndex < message.length) {
        if (e.key === "Enter") {
          onClickMessage();
        }
      }
    };
  }, [loading, messageIndex, message, onClickMessage]);

  return (
    <Page>
      <MainBox lastMessage={messageIndex === message.length}>
        <MainLoading loading={loading} setLoading={setLoading} />
        <CardBox>
          {cardArr.map((data, index) => (
            <React.Fragment key={index}>
              <Card lastMessage={messageIndex === message.length} data={data} />
            </React.Fragment>
          ))}

          <MessageBox
            onClick={onClickMessage}
            lastMessage={messageIndex === message.length}
            isLoading={loading}
          >
            <div>{message[messageIndex]}</div>
            <IconBox>
              <Icon backImg={enterImg} />
              or
              <Icon backImg={clickImg} />
            </IconBox>
          </MessageBox>
        </CardBox>
      </MainBox>
    </Page>
  );
};

const MainBox = styled.div<{ lastMessage: boolean }>`
  width: 100%;
  height: 100%;

  background-color: ${(props) => (props.lastMessage ? "transparent" : "black")};

  transition: 0.3s;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardBox = styled.div`
  width: 1000px;
  height: 100%;

  /* background-color: gray; */
  margin: auto;
  position: relative;

  display: flex;
  justify-content: center;

  overflow: hidden;

  /* @media (max-width: 1100px) {
    width: 100%;
  } */

  /* background-color: red; */

  @media (max-width: 600px) {
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
`;

const MessageBox = styled.div<{ lastMessage: boolean; isLoading: boolean }>`
  width: 90%;
  height: 200px;
  background-color: white;
  border: 3px solid gray;
  border-radius: 20px;

  position: absolute;
  bottom: 50px;

  padding: 5%;

  opacity: ${(props) => (props.isLoading ? "0" : "1")};

  transition: transform 0.3s, opacity 0.3s 0.5s;

  ${(props) =>
    props.lastMessage &&
    css`
      transform: translateY(130%);
    `}
`;

const IconBox = styled.div`
  width: auto;
  height: 50px;
  position: absolute;

  right: 10px;
  bottom: 10px;

  display: flex;
  align-items: center;

  font-size: 1.2rem;
`;

const Icon = styled.div<{ backImg: string }>`
  width: 30px;
  height: 30px;

  background-image: ${(props) => `url(${props.backImg})`};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  margin: 5px;
`;

export default React.memo(Main);
