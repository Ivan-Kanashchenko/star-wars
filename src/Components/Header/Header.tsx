import * as React from "react";
import Styled from "./styles";

export const Header = () => {
  return (
    <Styled.Header>
      <Styled.Logo href="#" />
      <Styled.SignIn>Sign In</Styled.SignIn>
    </Styled.Header>
  );
};
