import * as React from "react";
import { SignInForm } from "../Forms/SignInForm/SignInForm";
import { Styled } from "./styles";
import bgImage from "../../assets/backgrounds/rey.png";
import facebookIcon from "../../assets/icons/facebook.png";
import gitIcon from "../../assets/icons/github.png";
import googleIcon from "../../assets/icons/google.png";
import { useAuth } from "../../auth/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

interface LocationState {
  from?: {
    pathname?: string;
  };
}

export const Login = () => {
  const { googleAuth, facebookAuth, gitHubAuth, userId } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  //react-router-dom don`t have this interface
  const from = (location.state as LocationState)?.from?.pathname || "/";

  React.useEffect(() => {
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
