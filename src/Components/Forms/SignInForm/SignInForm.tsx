import * as React from "react";
import { Formik } from "formik";
import { Styled } from "./styles";
import { useAuth } from "../../../auth/AuthContext";
import {
  isValidEmail,
  isValidPassword,
} from "../../../helpers/validators/validators";

export const SignInForm: React.FC = () => {
  const { emailAuth } = useAuth();

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={(values) => {
        emailAuth(values.email, values.password);
      }}
    >
      {({ errors, touched }) => (
        <Styled.FormContainer>
          <Styled.FormInput
            type="email"
            name="email"
            placeholder="Email"
            validate={isValidEmail}
          />
          {errors.email && touched.email && (
            <Styled.Error>{errors.email}</Styled.Error>
          )}

          <Styled.FormInput
            type="password"
            name="password"
            placeholder="Password"
            validate={isValidPassword}
          />
          {errors.password && touched.password && (
            <Styled.Error>{errors.password}</Styled.Error>
          )}

          <Styled.Button type="submit">Login</Styled.Button>
        </Styled.FormContainer>
      )}
    </Formik>
  );
};
