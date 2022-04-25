import * as React from "react";
import { useAuth } from "../../auth/AuthContext";
import { useContent } from "../Context/ContentContext";
import { useModal } from "../Context/ModalContext";
import Styled from "./styles";

export const Navigation = () => {
  const { isAuth } = useAuth();
  const { content, contentHandler } = useContent();
  const { modalHandler } = useModal();

  const contentTypeHandler = (e) => {
    isAuth ? contentHandler(e.target.name) : modalHandler();
  };

  return (
    <Styled.Navigation>
      <Styled.Li>
        <Styled.Button
          name={"films"}
          onClick={contentTypeHandler}
          content={content}
        >
          films
        </Styled.Button>
        <Styled.LightSpan name={"films"} content={content} />
      </Styled.Li>
      <Styled.Li>
        <Styled.Button
          name={"people"}
          onClick={contentTypeHandler}
          content={content}
        >
          people
        </Styled.Button>
        <Styled.LightSpan name={"people"} content={content} />
      </Styled.Li>
      <Styled.Li>
        <Styled.Button
          name={"planets"}
          onClick={contentTypeHandler}
          content={content}
        >
          planets
        </Styled.Button>
        <Styled.LightSpan name={"planets"} content={content} />
      </Styled.Li>
    </Styled.Navigation>
  );
};
