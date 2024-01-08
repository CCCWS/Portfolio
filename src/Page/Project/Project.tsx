import React, { useState, useRef } from "react";
import styled from "styled-components";

import { Page } from "@Style/PageStyle";
import { ProjectList } from "@Data/ProjectList";

import OnePageScroll from "@Component/Molecule/OnePageScroll";
import ProjectDetail from "./ProjectDetail";
import MIniGameBtn from "@Component/Organism/MiniGame/MIniGameBtn";
import ImageGallery from "@Component/Organism/3DGallay/ImageGallery";

import useObserver from "@CustomHooks/useObserver";

const Project = () => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const projectItemRef = useRef<HTMLDivElement>(null);
  const { isView: projectItemView } = useObserver(projectItemRef, 0.1);
  const { isView: galleryView } = useObserver(galleryRef, 0.1);
  const [location, setLocation] = useState<number>(0);

  return (
    <Page>
      <OnePageScroll
        point={true}
        delay={500}
        location={location}
        setLocation={setLocation}
      >
        {/* <ProjectBox ref={projectItemRef}>
          <div>
            {ProjectList.map((data, index) => (
              <ProjectItem
                key={index}
                
                onClick={() => setLocation(index + 1)}
                img={data.thumbnail}
                title={data.title}
                isView={projectItemView}
                delay={index}
              />
            ))}
          </div>
        </ProjectBox> */}
        

        <ImageGalleryBox ref={galleryRef} isView={galleryView}>
          <ImageGallery perspective={2000} zAxis={500} reflect={false}>
            {ProjectList.map((data, index) => (
              <ProjectItem
                key={index}
                onClick={() => setLocation(index + 1)}
                img={data.thumbnail}
                title={data.title}
                isView={projectItemView}
                delay={index}
              />
            ))}
          </ImageGallery>
        </ImageGalleryBox>

        {ProjectList.map((data, index) => (
          <ProjectDetail key={index} projectData={data} />
        ))}
      </OnePageScroll>
    </Page>
  );
};

const ImageGalleryBox = styled.div<{ isView: boolean }>`
  /* background-color: red; */
  width: 100%;
  height: 100%;

  transition: 0.5s;

  opacity: ${(props) => (props.isView ? "1" : "0")};
`;

const ProjectBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  & > :first-child {
    width: 70%;
    height: 100%;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    align-items: center;

    /* background-color: blue; */

    @media (max-width: 900px) {
      width: 100%;
    }
  }
`;

interface ProjectItemProps {
  img: string;
  title: string;
  delay: number;
  isView: boolean;
}

const ProjectItem = styled.div<ProjectItemProps>`
  width: 35vmin;
  height: 35vmin;

  background-image: ${(props) => `url(${props.img})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  border-radius: 5px;

  /* transition: ${(props) => props.isView && "opacity 1s, transform 1s"};
  transition-delay: ${(props) =>
    props.isView ? `calc(${props.delay}s / 3.5)` : "0s"};
  transform: ${(props) =>
    props.isView ? "translateY(0px)" : "translateY(-100px)"};
  opacity: ${(props) => (props.isView ? "1" : "0")}; */

  /* filter: grayscale(100%); */
  /* box-shadow: ${(props) =>
    `5px 10px 10px 1px ${props.theme.color.black}`}; */

  position: relative;
  overflow: hidden;
  border-radius: 10px;

  &::before { 
    content: "${(props) => props.title}";
    color: white;

    width: inherit;
    height: inherit;

    background: linear-gradient(
      to top,
      #00000073 0%,
      #464646b2 50%,
      #b4b4b44e 100%
    );

    background-color: ${(props) => props.theme.color.black};

    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    bottom: 0;

    transition: 0.5s;
    transform: translateY(50px);
    opacity: 0;
    border-radius: inherit;
  }

  &:hover {
    transition: 0.5s;
    filter: grayscale(0);

    &::before {
      transform: translateY(0px);
      opacity: 0.8;
    }
  }

  @media (max-width: 750px) {
    width: 50vmin;
    height: 50vmin;
  }
`;

export default Project;
