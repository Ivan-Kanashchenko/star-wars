import * as React from "react";
import { FC } from "react";
import { useState } from "react";
import { useAuth } from "../../auth/AuthContext";
import { StyledElement } from "../StyledComponents/Elements/Elements";
import Styled from "./styles";

export const Account: FC = () => {
  const { Logout, userName, userEmail, userPhoto } = useAuth();

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Styled.Login
        userId
        userPhoto={userPhoto}
        onClick={toggleMenu}
      ></Styled.Login>
      {menuOpen && (
        <StyledElement.Container absolute loginList>
          <StyledElement.Ul loginList>
            {!!userName && (
              <StyledElement.Li loginList>{userName}</StyledElement.Li>
            )}

            {!!userEmail && (
              <StyledElement.Li loginList>{userEmail}</StyledElement.Li>
            )}
            <StyledElement.Li>
              <Styled.Button onClick={Logout}>Exit</Styled.Button>
            </StyledElement.Li>
          </StyledElement.Ul>
        </StyledElement.Container>
      )}
    </>
  );
};
