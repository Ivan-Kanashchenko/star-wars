import React, { FC } from "react";

import { useAuth } from "auth/AuthContext";
import { Account } from "components/Account";

import { Styled } from "./styles";

export const Header: FC = () => {
  const { userId } = useAuth();

  return (
    <Styled.Header>
      <Styled.Logo to="/" />
      {userId ? (
        <Account />
      ) : (
        <div>
          <Styled.Login to={"/login"}>Sign In</Styled.Login>
        </div>
      )}
    </Styled.Header>
  );
};
