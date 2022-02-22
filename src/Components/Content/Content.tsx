import * as React from 'react';
import { useContent } from "../ContentContext/ContentContext";
import Films from "./Films/Films";
import People from "./People/People";
import Planets from "./Planets/Planets";

const Content = () => {
  const { content } = useContent();

  return (
    <div>
      {content === "description" && (
        <div>Hi! Thi is the main database of StarWars</div>
      )}
      {content === "films" && <Films />}
      {content === "people" && <People />}
      {content === "planets" && <Planets />}
    </div>
  );
};

export default Content;
