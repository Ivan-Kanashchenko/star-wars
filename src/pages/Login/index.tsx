import React, { FC, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { SignInForm } from "components/Forms/SignInForm";
import bgImage from "assets/backgrounds/rey.png";
import facebookIcon from "assets/icons/facebook.png";
import gitIcon from "assets/icons/github.png";
import googleIcon from "assets/icons/google.png";
import { useAuth } from "auth/AuthContext";

import { Styled } from "./styles";

interface LocationState {
  from?: {
    pathname?: string;
  };
}

export const Login: FC = () => {
  const { googleAuth, facebookAuth, gitHubAuth, userId } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  //react-router-dom don`t have this interface
  const from = (location.state as LocationState)?.from?.pathname || "/";

  useEffect(() => {
    userId && navigate(from, { replace: true });
  }, [userId, from, navigate]);

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.Block>
          <Styled.Title>Sign In</Styled.Title>
        </Styled.Block>
        <Styled.Block>
          <SignInForm />
          <Styled.CustomLink to="/registration">
            Register account...
          </Styled.CustomLink>
        </Styled.Block>
        <Styled.Block flexRow>
          <Styled.SocialButton icon={gitIcon} onClick={gitHubAuth} />
          <Styled.SocialButton icon={facebookIcon} onClick={facebookAuth} />
          <Styled.SocialButton icon={googleIcon} onClick={googleAuth} />
        </Styled.Block>
      </Styled.Container>
      <Styled.Background bg={bgImage} />
    </Styled.Wrapper>
  );
};
