import styled from "styled-components";

interface StyleProps {
  width: string;
  height: string;
  innerText: string;
}

interface ButtonProps extends StyleProps {
  onClickEvent: () => void;
}

const Button = ({ width, height, innerText, onClickEvent }: ButtonProps) => {
  return (
    <ButtonDiv
      width={width}
      height={height}
      innerText={innerText}
      onClick={onClickEvent}
    />
  );
};

const ButtonDiv = styled.button<StyleProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  position: relative;
  overflow: hidden;
  margin: 5px;
  border-radius: 5px;
  border: none;

  overflow: hidden;

  ::before {
    content: "";
    opacity: 1;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200%;
    height: 400%;
    transition: 0.5s;

    background: black;

    animation: animate 2s linear infinite;
    animation-play-state: paused;
  }

  ::after {
    content: "${(props) => props.innerText}";
    position: absolute;
    border-radius: 5px;
    inset: 3px;
    background-color: #e7e7e7;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  @keyframes animate {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }

    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }

  &:hover {
    ::before {
      animation-play-state: running;
      background: linear-gradient(
        transparent,
        #ff3c7b,
        #45f3ff,
        #15fc7f,
        transparent
      );
    }
  }
`;

export default Button;
