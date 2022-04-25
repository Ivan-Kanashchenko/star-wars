import * as React from "react";
import { FC } from "react";
import { useAuth } from "../../auth/AuthContext";
import { Account } from "../Account/Account";
import { useModal } from "../Context/ModalContext";
import Styled from "./styles";

export const Header: FC = () => {
  const { isAuth } = useAuth();
  const { modalHandler } = useModal();

  return (
    <Styled.Header>
      <Styled.Logo href="#" />
      {isAuth ? (
        <Account />
      ) : (
        <div>
          <Styled.Login onClick={modalHandler}>Sign In</Styled.Login>
        </div>
      )}
    </Styled.Header>
  );
};
