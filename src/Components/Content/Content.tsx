import * as React from "react";
import { useContent } from "../ContentContext/ContentContext";
import { Films } from "./Films";
import { People } from "./People";
import { Planets } from "./Planets";

export const Content = () => {
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
