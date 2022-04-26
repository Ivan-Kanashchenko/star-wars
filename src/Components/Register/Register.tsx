import * as React from "react";
import { useState } from "react";
import styled from "styled-components";
import { useAuth } from "../../auth/AuthContext";
import { useModal } from "../Context/ModalContext";
import Styled from "../Loading/styles";
import StyledElement from "../StyledComponents/Elements/Elements";

const Register = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [passConfirm, setPassConfirm] = useState("");

  const onRegister = (e: {
    target: { name: string; value: React.SetStateAction<string> };
  }) => {
    e.target.name === "email" && setEmail(e.target.value);
    e.target.name === "pass" && setPass(e.target.value);
    e.target.name === "passConfirm" && setPassConfirm(e.target.value);
  };

  return (
    <Container>
      <TextBlock>
        <StyledElement.Paragraph>
          We are glad to see you in our database. This is a small pet-project
          made by Ivan Kanashchenko to study libraries for development. The
          project uses the Starwars API
        </StyledElement.Paragraph>
      </TextBlock>
      <FormBlock>
        <Form>
          <StyledElement.Span>
            To enter the database please create account
          </StyledElement.Span>
          <FormInput
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={onRegister}
          />
          <FormInput
            type="password"
            name="pass"
            placeholder="Enter your password"
            value={pass}
            onChange={onRegister}
          />
          <FormInput
            type="password"
            name="passConfirm"
            placeholder="Confirm your password"
            value={passConfirm}
            onChange={onRegister}
          />
          <Button type="submit">Create</Button>
        </Form>
      </FormBlock>
    </Container>
  );
};

export default Register;

const Container = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-evenly;
`;

const TextBlock = styled.div`
  max-width: 40%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-self: center;
  text-align: left;
  color: var(--accent4);
`;

const FormBlock = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 40px;
  background: var(--accent4);
  border-radius: 4px;
`;

const FormInput = styled.input`
  width: 100%;
  margin: 10px;
  padding: 10px;
  border: 1px solid var(--primary3);
  border-radius: 3px;

  &:hover,
  :focus {
    border: 1px solid var(--primary1);
  }
`;

const Button = styled.button`
  padding: 5px 35px;
  border: 1px solid var(--primary3);
  border-radius: 3px;
  margin: 5px 0px;
  background-color: white;

  &:hover {
    background-color: var(--primary1);
    border: 1px solid var(--primary1);
    color: var(--accent4);
  }
`;
