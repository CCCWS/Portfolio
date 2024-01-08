import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useLocation } from "react-router-dom";
import "@Style/Layout.css";

const RouteTransition = ({ location, children }: any) => {
  const pathname = location.pathname;

  return (
    <TransitionGroup>
      <CSSTransition key={pathname} timeout={300} classNames={"page"}>
        {children}
      </CSSTransition>
    </TransitionGroup>
  );
};

export default RouteTransition;
