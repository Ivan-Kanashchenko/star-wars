import { Form, Field } from "formik";
import styled from "styled-components";

const FormContainer = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 40px;
  background: var(--accent4);
  border-radius: 4px;
`;

const FormInput = styled(Field)<{ touched?: boolean; errors?: boolean }>`
  width: 100%;
  margin: 10px;
  padding: 10px;
  border-radius: 3px;
  transition: 0.3s;

  border: ${({ touched, errors }) => {
    if (touched && errors) {
      return `1px solid var(--accent1);`;
    } else if (touched && !errors) {
      return `1px solid var(--accent3);`;
    }
    return `1px solid var(--primary3);`;
  }};

  box-shadow: ${({ touched, errors }) => {
    if (touched && errors) {
      return `0 0 2px 0px var(--accent1);`;
    } else if (touched && !errors) {
      return `0 0 2px 0px var(--accent3);`;
    }
    return ``;
  }};

  &:hover,
  :focus {
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
`;

export const Styled = {
  Error,
  Button,
  FormInput,
  FormContainer,
};
