import React, { useRef, useState } from "react";
import styled from "styled-components";

import Modal from "@Component/Molecule/Modal";
import ProjectImg from "./ProjectImg";
import ProjectImgCarousel from "./ProjectImgCarousel";
import ProjectDescription from "./ProjectDescription";

import { ProjectType } from "@Data/ProjectList";
import useObserver from "@CustomHooks/useObserver";

interface Props {
  projectData: ProjectType;
}

const ProjectDetail = ({ projectData }: Props) => {
  const projectRef = useRef<HTMLDivElement>(null);
  const { isView } = useObserver(projectRef, 0.5);

  const [onModalOpen, setOnModalOpen] = useState<boolean>(false);
  const [currImg, setCurrImg] = useState<string>("");

  return (
    <>
      <Div ref={projectRef} img={projectData.thumbnail}>
        <ProjectInfo isView={isView}>
          <ProjectImgBox id="project_img_box">
            <ProjectImg
              image={projectData.image}
              setCurrImg={setCurrImg}
              setOnModalOpen={setOnModalOpen}
            />

            <ProjectImgCarousel
              image={projectData.image}
              setCurrImg={setCurrImg}
              setOnModalOpen={setOnModalOpen}
            />
          </ProjectImgBox>

          <ProjectDescription isView={isView} projectData={projectData} />
        </ProjectInfo>
      </Div>

      <Modal onModalOpen={onModalOpen} setOnModalOpen={setOnModalOpen}>
        <ModalImg src={currImg} />
      </Modal>
    </>
  );
};

const Div = styled.div<{ img: string }>`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProjectInfo = styled.div<{ isView: boolean }>`
  width: 95%;
  height: 95%;
  border-radius: 10px;

  transition: 0.3s;
  padding: 1rem;
  will-change: transform;

  display: flex;

  justify-content: space-around;
  align-items: center;

  overflow: hidden;

  opacity: ${(props) => (props.isView ? "1" : "0")};
  transform: ${(props) =>
    props.isView ? "translate3d(0px,0,0)" : "translate3d(30%,0,0)"};

  @media (max-width: 750px) {
    flex-direction: column;
  }

  @media (min-width: 1000px) {
    width: 85%;
    height: 85%;
  }
`;

const ProjectImgBox = styled.div`
  width: 30%;
  height: 100%;
  background-color: ${(props) => props.theme.color.black};

  border-radius: 10px;
  padding: 10px;

  overflow-x: scroll;
  overflow-y: scroll;
  overflow: overlay;

  display: flex;
  flex-direction: column;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 750px) {
    flex-direction: row;
    width: 100%;
    height: 30%;
  }
`;

const ModalImg = styled.img`
  max-width: 80%;
  max-height: 80%;
  height: auto;

  border-radius: 5px;
  box-shadow: 0px 0px 50px 20px gray;

  @media (max-width: 750px) {
    max-width: 100%;
  }
`;

export default React.memo(ProjectDetail);
