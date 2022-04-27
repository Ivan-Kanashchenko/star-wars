import * as React from "react";
import { withFormik, FormikProps, FormikErrors } from "formik";
import StyledElement from "../../StyledComponents/Elements/Elements";
import { isValidEmail, isValidPassword } from "../../../helpers/validators";
import Styled from "./styles";

interface FormValues {
  displayName: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

interface OtherProps {
  message: string;
}

const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
  const { touched, errors, isSubmitting, message } = props;
  return (
    <Styled.FormContainer>
      <StyledElement.Span>{message}</StyledElement.Span>
      <Styled.FormInput
        type="text"
        name="displayName"
        placeholder="Name"
        touched={!!touched.displayName}
        errors={!!errors.displayName}
      />
      {touched.displayName && errors.displayName && (
        <Styled.Error>{errors.displayName}</Styled.Error>
      )}

      <Styled.FormInput
        type="email"
        name="email"
        placeholder="Email"
        touched={!!touched.email}
        errors={!!errors.email}
      />
      {touched.email && errors.email && (
        <Styled.Error>{errors.email}</Styled.Error>
      )}

      <Styled.FormInput
        type="password"
        name="password"
        placeholder="Password"
        touched={!!touched.password}
        errors={!!errors.password}
      />
      {touched.password && errors.password && (
        <Styled.Error>{errors.password}</Styled.Error>
      )}

      <Styled.FormInput
        type="password"
        name="passwordConfirm"
        placeholder="Confirm your password"
        touched={!!touched.passwordConfirm}
        errors={!!errors.passwordConfirm}
      />
      {touched.passwordConfirm && errors.passwordConfirm && (
        <Styled.Error>{errors.passwordConfirm}</Styled.Error>
      )}

      <Styled.Button type="submit" disabled={isSubmitting}>
        Registration
      </Styled.Button>
    </Styled.FormContainer>
  );
};

interface MyFormProps {
  initialEmail?: string;
  message?: string;
}

// Wrap our form with the withFormik HoC
const MyForm = withFormik<MyFormProps, FormValues>({
  // Transform outer props into form values
  mapPropsToValues: () => {
    return {
      displayName: "",
      email: "",
      password: "",
      passwordConfirm: "",
    };
  },

  validate: (values: FormValues) => {
    let errors: FormikErrors<FormValues> = {};
    if (!values.displayName) {
      errors.displayName = "Name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!isValidEmail(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.password) {
      errors.password = "password is required";
    } else if (!isValidPassword(values.password)) {
      errors.password =
        "Invalid password. Password must be at least 5 characters long and max 15 characters long. Password must contain at least one numeric digit, one uppercase and one lowercase letter";
    }
    if (!values.passwordConfirm) {
      errors.passwordConfirm = "password is required";
    } else if (!isValidPassword(values.passwordConfirm)) {
      errors.passwordConfirm =
        "Invalid password. Password must be at least 5 characters long and max 15 characters long. Password must contain at least one numeric digit, one uppercase and one lowercase letter";
    } else if (values.passwordConfirm !== values.password) {
      errors.passwordConfirm = "Passwords do not match";
    }
    return errors;
  },

  handleSubmit: (values) => {
    // do submitting things
  },
})(InnerForm);

const SignOnForm = ({ message }) => <MyForm message={message} />;

export default SignOnForm;
