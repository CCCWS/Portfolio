import React from "react";
import styled from "styled-components";

import Button from "@Component/Atom/Button";

import { ProjectType } from "@Data/ProjectList";

interface Props {
  isView: boolean;
  projectData: ProjectType;
}

const ProjectDescription = ({ isView, projectData }: Props) => {
  const delay = [0.5, 0.7, 0.9, 1.1, 1.3, 1.5];

  const onMovePage = (url: string): void => {
    window.open(`${url}`, "_blank");
  };

  return (
    <Div>
      <Title delay={delay[0]} isView={isView}>
        <div>{projectData.title}</div>
      </Title>

      <Description delay={delay[1]} isView={isView}>
        {projectData.description}
      </Description>

      <SkillImgBox delay={delay[2]} isView={isView}>
        {projectData.skill.map((data, index) => (
          <SkillImg
            key={index}
            title={data.name}
            name={data.name}
            img={data.img}
          />
        ))}
      </SkillImgBox>

      {projectData.deploy ? (
        <>
          <Deploy delay={delay[3]} isView={isView}>
            배포 :
            {Array.isArray(projectData.deploy) ? (
              <>
                {projectData.deploy.map((data, index) => (
                  <SkillImg
                    key={index}
                    title={data.name}
                    name={data.name}
                    img={data.img}
                  />
                ))}
              </>
            ) : (
              <SkillImg
                title={projectData.deploy.name}
                name={projectData.deploy.name}
                img={projectData.deploy.img}
              />
            )}
          </Deploy>

          <UrlBtnBox delay={delay[4]} isView={isView}>
            <Button
              width={"120px"}
              height={"40px"}
              innerText={"Git Repository"}
              onClickEvent={() => onMovePage(projectData.repositoryUrl)}
            />

            <Button
              width={"120px"}
              height={"40px"}
              innerText={"Web Site"}
              onClickEvent={() => onMovePage(projectData.deployUrl as string)}
            />
          </UrlBtnBox>
        </>
      ) : (
        <>
          <UrlBtnBox delay={delay[3]} isView={isView}>
            <Button
              width={"120px"}
              height={"40px"}
              innerText={"Git Repository"}
              onClickEvent={() => onMovePage(projectData.repositoryUrl)}
            />
          </UrlBtnBox>
        </>
      )}
    </Div>
  );
};

const Div = styled.div`
  width: 65%;
  height: 100%;
  border-radius: inherit;
  background-color: #e4e4e4;

  box-shadow: 0px 0px 10px 5px gray;

  padding: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow-x: hidden;
  overflow-y: scroll;

  @media (max-width: 750px) {
    width: 100%;
    height: 65%;
  }
`;

interface StyledProps {
  delay: number;
  isView: boolean;
}

const Base = styled.div<StyledProps>`
  width: 100%;
  min-height: 10%;
  padding: 20px;

  transition: ${(props) => (props.isView ? "0.5s" : "0s")};
  transition-delay: ${(props) => (props.isView ? `${props.delay}s` : "0s")};
  opacity: ${(props) => (props.isView ? "1" : "0")};
  transform: ${(props) =>
    props.isView ? " translate3d(0px, 0, 0)" : "translate3d(-100px,0,0)"};

  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media (min-width: 1200px) {
    width: 80%;
  }

  @media (max-width: 750px) {
    padding: 10px;
  }
`;

const Title = styled(Base)`
  font-size: 2rem;

  & > :first-child {
    position: relative;

    &::before {
      content: "";
      width: 100%;
      height: 10px;

      position: absolute;
      bottom: 0;
      background-color: ${(props) => props.theme.color.red_transparency};
    }
  }
`;

const Description = styled(Base)`
  line-height: 30px;
`;

const SkillImgBox = styled(Base)`
  justify-content: center;
`;

const Deploy = styled(Base)`
  justify-content: center;
`;

const UrlBtnBox = styled(Base)`
  justify-content: center;
`;

const SkillImg = styled.div<{ name: string; img: string }>`
  width: 20%;
  height: 50px;

  border-radius: 10px;

  margin: 5px;

  background-image: ${(props) => `url(${props.img})`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  overflow: hidden;

  &:hover {
    &::before {
      opacity: 1;
    }
  }

  &::before {
    content: "${(props) => props.name}";
    width: 100%;
    height: 100%;

    background-color: #c0c0c0ab;

    display: flex;
    justify-content: center;
    align-items: center;

    text-align: center;

    transition: 0.3s;
    opacity: 0;
  }
`;

export default ProjectDescription;
