import * as React from "react";
import { useEffect } from "react";
import gitIcon from "../../assets/icons/github.png";
import facebookIcon from "../../assets/icons/facebook.png";
import googleIcon from "../../assets/icons/google.png";
import twitterIcon from "../../assets/icons/twitter.png";
import styled from "styled-components";
import { useModal } from "../Context/ModalContext";
import { useAuth } from "../../auth/AuthContext";
import Styled from "./styles";

const Modal = () => {
  const { modal, modalHandler } = useModal();
  const { googleAuth, facebookAuth, gitHubAuth, isAuth } = useAuth();

  useEffect(() => {
    isAuth && modalHandler();
  }, [isAuth]);

  if (!modal) {
    return null;
  }

  return (
    <>
      <Styled.Container>
        <Styled.Block>
          <Styled.Title>Sign In</Styled.Title>
        </Styled.Block>
        <Styled.Block>
          <Styled.Form>
            <Styled.Input type="email" placeholder="Email" />
            <Styled.Input type="password" placeholder="Password" />
            <Styled.Button type="submit">Login</Styled.Button>
            <Styled.Link href="#">Register account...</Styled.Link>
          </Styled.Form>
        </Styled.Block>
        <Styled.Block flexRow>
          <Styled.SocialButton icon={gitIcon} onClick={gitHubAuth} />
          <Styled.SocialButton icon={facebookIcon} onClick={facebookAuth} />
          <Styled.SocialButton icon={googleIcon} onClick={googleAuth} />
        </Styled.Block>
      </Styled.Container>
      <Styled.Background onClick={modalHandler} />
    </>
  );
};

export default Modal;
