import React, { FC } from "react";
import { Navigate, useLocation } from "react-router-dom";

import { SignOnForm } from "components/Forms/SignOnForm";
import { Styled } from "./styles";
import { StyledElement } from "ui";
import { useAuth } from "auth/AuthContext";

export const Register: FC = () => {
  const { userId } = useAuth();
  const location = useLocation();

  if (userId) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return (
    <Styled.Container>
      <Styled.TextBlock>
        <StyledElement.Paragraph>
          We are glad to see you in our database. This is a small pet-project
          made by Ivan Kanashchenko to study libraries for development. The
          project uses the Starwars API
        </StyledElement.Paragraph>
      </Styled.TextBlock>
      <Styled.FormBlock>
        <SignOnForm message={"To enter the database please create account"} />
      </Styled.FormBlock>
    </Styled.Container>
  );
};
