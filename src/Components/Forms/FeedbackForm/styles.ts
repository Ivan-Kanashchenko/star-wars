import styled from "styled-components";
import { Field, Form } from "formik";

const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 300px;
`;

const Input = styled(Field)<{ error: boolean; touched: boolean }>`
  width: 100%;
  border: 1px solid
    ${({ error, touched }) =>
      touched ? error && `var(--accent1);` : `var(--primary3);`};
  border-radius: 3px;
  margin: 5px 0;
  padding: 5px;
  &:hover,
  :focus {
    border-color: var(--primary1);
  }
`;

const TextArea = styled.textarea`
  height: 100%;
  width: 100%;
  resize: none;
  border: 1px solid var(--primary3);
  border-radius: 3px;
  margin: 5px 0;
  padding: 5px;
  &:hover,
  :focus {
    border-color: var(--primary1);
  }
`;

const SendButton = styled.button`
  display: block;
  border: 1px solid var(--primary3);
  border-radius: 3px;
  margin: 5px 0 0;
  padding: 5px 50px;
  &:hover {
    border-color: var(--primary1);
  }
  &:active,
  :hover {
    border-color: var(--primary1);
    background: var(--primary1);
    color: white;
  }
`;

export const Styled = {
  SendButton,
  Input,
  TextArea,
  FormContainer,
  Error,
};
