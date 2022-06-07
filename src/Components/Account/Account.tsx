import * as React from "react";
import Styled from "./styles";
import { StyledElement } from "../StyledComponents/Elements/Elements";
import { useAuth } from "../../auth/AuthContext";
import { useState } from "react";

export const Account: React.FC = () => {
  const { Logout, userId, userName, userEmail, userPhoto } = useAuth();

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Styled.Login
        userId={userId}
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
