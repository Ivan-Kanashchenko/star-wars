import React, { FC } from "react";
import { Account } from "../Account/Account";
import { Styled } from "./styles";
import { useAuth } from "../../auth/AuthContext";

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
