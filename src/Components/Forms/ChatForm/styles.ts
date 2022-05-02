import { Form, Field } from "formik";
import styled from "styled-components";

const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const FormInput = styled(Field)<{ touched?: boolean; errors?: boolean }>`
  border: 1px solid var(--accent4);
  border-radius: 3px;
  padding: 5px;
  margin: 5px;
  width: 64%;

  &:focus,
  :hover {
    border: 1px solid var(--primary1);
  }
`;

const Button = styled.button`
  padding: 5px 35px;
  border: 1px solid var(--primary3);
  border-radius: 3px;
  margin: 10px 0px;
  background-color: white;

  &:hover {
    background-color: var(--primary1);
    border: 1px solid var(--primary1);
    color: var(--accent4);
  }
`;

const Error = styled.span`
  color: var(--accent1);
  font-size: 10px;
  text-align: left;
  width: 64%;
`;

const Styled = {
  Error,
  Button,
  FormInput,
  FormContainer,
};

export default Styled;
