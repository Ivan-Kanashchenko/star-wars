import { Form } from "formik";
import styled from "styled-components";

import sendMessageGray from "assets/chat/sendMessage.png";
import sendMessageYellow from "assets/chat/sendMessageYellow.png";

const FormContainer = styled(Form)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-height: 55px;
  height: 100%;
`;

const FormInput = styled.textarea<{
  touched?: string;
  errors?: string;
}>`
  background: transparent;
  border-radius: 0px 0px 0px 15px;
  padding: 5px 5px 5px 15px;
  width: 100%;
  height: 100%;
  color: var(--accent4);
  word-wrap: wrap;
  resize: none;

  &:focus,
  :hover {
  }
`;

const SendButton = styled.button`
  width: 25px;
  height: 25px;
  margin: 0px 10px;
  background-image: url(${sendMessageGray});
  background-repeat: no-repeat;
  background-size: contain;

  &:hover {
    background-image: url(${sendMessageYellow});
  }
`;

export const Styled = {
  SendButton,
  FormInput,
  FormContainer,
};
