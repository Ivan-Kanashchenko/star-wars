import * as React from "react";
import { Formik } from "formik";
import StyledElement from "../../StyledComponents/Elements/Elements";
import {
  isValidEmail,
  isValidPassword,
  isValidPasswordConfirm,
  isValidUserName,
} from "../../../helpers/validators";
import Styled from "./styles";

const SignOnForm = ({ message }) => (
  <>
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
        passwordConfirm: "",
      }}
      onSubmit={(values) => {
        // same shape as initial values
        console.log(values);
      }}
    >
      {({ errors, touched, isValidating }) => (
        <Styled.FormContainer>
          <StyledElement.Span>{message}</StyledElement.Span>
          <Styled.FormInput
            type="text"
            name="username"
            errors={errors.username}
            touched={touched.username}
            validate={isValidUserName}
          />
          {errors.username && touched.username && (
            <Styled.Error>{errors.username}</Styled.Error>
          )}

          <Styled.FormInput
            type="email"
            name="email"
            validate={isValidEmail}
            errors={errors.email}
            touched={touched.email}
          />
          {errors.email && touched.email && (
            <Styled.Error>{errors.email}</Styled.Error>
          )}

          <Styled.FormInput
            type="password"
            name="password"
            errors={errors.password}
            touched={touched.password}
            validate={isValidPassword}
          />
          {errors.password && touched.password && (
            <Styled.Error>{errors.password}</Styled.Error>
          )}

          <Styled.FormInput
            type="password"
            name="passwordConfirm"
            validate={isValidPasswordConfirm}
            errors={errors.passwordConfirm}
            touched={touched.passwordConfirm}
          />
          {errors.passwordConfirm && touched.passwordConfirm && (
            <Styled.Error>{errors.passwordConfirm}</Styled.Error>
          )}

          <Styled.Button type="submit">Registration</Styled.Button>
        </Styled.FormContainer>
      )}
    </Formik>
  </>
);

export default SignOnForm;
