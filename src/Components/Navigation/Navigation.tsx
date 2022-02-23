import * as React from "react";
import { useContent } from "../ContentContext/ContentContext";

export const Navigation = () => {
  const { contentHandler } = useContent();

  const contentTypeHandler = (e) => {
    contentHandler(e.target.name);
  };

  return (
    <ul className="app-navigation">
      <li>
        <button name={"films"} onClick={contentTypeHandler}>
          films
        </button>
      </li>
      <li>
        <button name={"people"} onClick={contentTypeHandler}>
          people
        </button>
      </li>
      <li>
        <button name={"planets"} onClick={contentTypeHandler}>
          planets
        </button>
      </li>
    </ul>
  );
};
