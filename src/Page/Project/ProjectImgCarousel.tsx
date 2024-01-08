import React from "react";
import styled from "styled-components";

import Carousel from "@Component/Molecule/Carousel";

interface Props {
  image: string[];
  setCurrImg: React.Dispatch<React.SetStateAction<string>>;
  setOnModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProjectImgCarousel = ({ image, setCurrImg, setOnModalOpen }: Props) => {
  return (
    <Div>
      <Carousel
        height={"100%"}
        transitionDuration={500}
        nextBtn={true}
        point={true}
      >
        {image.map((img, index) => (
          <CarouselImg
            key={index}
            src={img}
            alt={img}
            onClick={() => {
              setCurrImg(img);
              setOnModalOpen(true);
            }}
          />
        ))}
      </Carousel>
    </Div>
  );
};

const Div = styled.div`
  width: 100%;
  height: 100%;

  @media (min-width: 750px) {
    display: none;
  }
`;

const CarouselImg = styled.img`
  width: 100%;
  height: 100%;
  background-color: white;
  object-fit: contain;

  transition: 0.3s;

  &:hover {
    opacity: 0.5;
  }
`;

export default React.memo(ProjectImgCarousel);
