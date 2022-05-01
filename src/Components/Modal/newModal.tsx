import * as React from "react";
import { useEffect } from "react";
import gitIcon from "../../assets/icons/github.png";
import facebookIcon from "../../assets/icons/facebook.png";
import googleIcon from "../../assets/icons/google.png";
import { useModal } from "../../Context/ModalContext";
import { useAuth } from "../../auth/AuthContext";
import Styled from "./styles";
import SignInForm from "../Forms/SignInForm/SignInForm";
import { useNavigate } from "react-router-dom";

const newModal = () => {
  let navigate = useNavigate();

  let buttonRef = React.useRef<HTMLButtonElement>(null);

  function onDismiss() {
    navigate(-1);
  }
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
          <SignInForm />
          <Styled.CustomLink to="/registration" onClick={modalHandler}>
            Register account...
          </Styled.CustomLink>
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

export default newModal;
