import { useRef } from "react";

const useScroll = () => {
  const component = useRef<HTMLDivElement>(null);

  //behavior: "smooth",
  const onComponentScroll = () => {
    component.current?.scrollIntoView({ block: "start" });
  };
  return { component, onComponentScroll };
};

export default useScroll;
