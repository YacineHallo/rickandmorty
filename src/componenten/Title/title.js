import React, { useEffect } from "react";
import Container from "./container";

function Title(props) {
  useEffect(() => {
    document.title = `${props.title}| Kunstuitleen Amsterdam`;
    window.scrollTo(0, 0);
  }, []);
  return <Container wide={props.wide}>{props.children}</Container>;
}
export default Title;
