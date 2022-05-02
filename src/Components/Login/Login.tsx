import * as React from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SignInForm } from "../Forms/SignInForm/SignInForm";
import gitIcon from "../../assets/icons/github.png";
import facebookIcon from "../../assets/icons/facebook.png";
import googleIcon from "../../assets/icons/google.png";
import bgImage from "../../assets/backgrounds/rey.png";
import { useAuth } from "../../auth/AuthContext";
import Styled from "./styles";

export const Login = () => {
  const { googleAuth, facebookAuth, gitHubAuth, isAuth } = useAuth();

  type SomeType = {
    state: {
      from: {
        pathname: string;
      };
    };
  };

  const navigate = useNavigate();
  const location = useLocation();

  const from: string = location?.state?.from?.pathname || "/";

  useEffect(() => {
    isAuth && navigate(from, { replace: true });
  }, [isAuth, from, navigate]);

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
