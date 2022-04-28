import * as React from "react";
import { Formik } from "formik";
import {
  isValidEmail,
  isValidPassword,
  isValidPasswordConfirm,
  isValidUserName,
} from "../../../helpers/validators";
import Styled from "./styles";
import StyledElement from "../../StyledComponents/Elements/Elements";

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
      {({ errors, touched, isValidating, values }) => (
        <Styled.FormContainer>
          <StyledElement.Span>{message}</StyledElement.Span>
          <Styled.FormInput
            type="text"
            name="username"
            placeholder="Name"
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
            placeholder="Email"
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
            placeholder="Password"
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
            placeholder="Confirm your password"
            validate={() =>
              isValidPasswordConfirm(values.password, values.passwordConfirm)
            }
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
