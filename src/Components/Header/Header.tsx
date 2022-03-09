import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import * as React from "react";
import { FC } from "react";
import { useState } from "react";
import { useAuth } from "../../auth/AuthContext";
import { Account } from "../Account/Account";
import StyledElement from "../StyledComponents/Elements/Elements";
import Styled from "./styles";

export const Header: FC = () => {
  const { googleAuth, isAuth } = useAuth();

  return (
    <Styled.Header>
      <Styled.Logo href="#" />
      {isAuth ? (
        <Account />
      ) : (
        <Styled.Login onClick={googleAuth}>Sing in with google</Styled.Login>
      )}
    </Styled.Header>
  );
};
