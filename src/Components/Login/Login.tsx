import * as React from "react";
import { Key, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import SignInForm from "../Forms/SignInForm/SignInForm";
import gitIcon from "../../assets/icons/github.png";
import facebookIcon from "../../assets/icons/facebook.png";
import googleIcon from "../../assets/icons/google.png";
import bgImage from "../../assets/backgrounds/rey.png";
import { useAuth } from "../../auth/AuthContext";
import { Path } from "typescript";

const Login = () => {
  const { googleAuth, facebookAuth, gitHubAuth, isAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  useEffect(() => {
    isAuth && navigate(from, { replace: true });
  }, [isAuth]);

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

export default Login;

const Background = styled.div<{ bg: string }>`
  background: ${({ bg }) =>
    bg ? `url(${bg}) 0 0/100% auto no-repeat;` : "transparent"};
  overflow: hidden;
  width: 37%;
  height: 100%;
  position: absolute;
  right: 18%;
  bottom: 0%;
  z-index: 11;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 100%;
  z-index: 6;
  overflow: hidden;
`;

const Container = styled.div`
  width: 100%;
  height: 500px;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 7px;
  background-color: white;
  padding: 5px 0px;
  z-index: 7;
  position: absolute;
  left: 20%;
  top: 20%;
`;

const Title = styled.h3`
  font-size: 48px;
`;

const Block = styled.div<{ flexRow?: boolean }>`
  ${({ flexRow }) =>
    flexRow &&
    `display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  `}
  padding: 15px;
  width: 100%;
`;

const SocialButton = styled.button<{ icon: string }>`
  width: 40px;
  height: 40px;
  background: black;
  ${({ icon }) => icon && `background: url(${icon}) 0 0/contain no-repeat;`}
`;

const CustomLink = styled(Link)`
  font-size: 12px;
  text-decoration: none;
  color: var(--primary1);

  &:hover {
    text-decoration: underline;
  }
`;

const Styled = {
  Wrapper,
  Block,
  Container,
  Title,
  CustomLink,
  SocialButton,
  Background,
};
