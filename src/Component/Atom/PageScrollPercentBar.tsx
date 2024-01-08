import { useState, useEffect } from "react";
import styled from "styled-components";

interface Props {
  color?: string;
  height?: number;
}

const PageScrollPercentBar = ({ color, height }: Props) => {
  const [currWidth, setCurrWidth] = useState<number>(0);

  useEffect(() => {
    const onScroll = (): void => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;

      if (scrollHeight === clientHeight) return;

      const widthPercent = scrollTop / (scrollHeight - clientHeight);

      setCurrWidth(Math.floor(widthPercent * 100));
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <Div
      currWidth={currWidth}
      color={color ? color : "black"}
      height={height ? height : 50}
    />
  );
};

interface StyleProps {
  currWidth: number;
  height: number;
  color: string;
}

const Div = styled.div<StyleProps>`
  width: 100vw;
  height: ${(props) => `${props.height}px`};
  background-color: ${(props) => props.color};

  position: fixed;
  top: 0;

  transition: all linear 0.3s;
  transform: ${(props) => `translate3d(calc(-100% + ${props.currWidth}%),0,0)`};
`;

export default PageScrollPercentBar;
