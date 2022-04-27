import * as React from "react";
import { withFormik, FormikProps, FormikErrors } from "formik";
import StyledElement from "../../StyledComponents/Elements/Elements";
import { isValidEmail, isValidPassword } from "../../../helpers/validators";
import Styled from "./styles";

interface FormValues {
  email: string;
  password: string;
}

const InnerForm = (props: FormikProps<FormValues>) => {
  const { touched, errors, isSubmitting } = props;
  return (
    <Styled.FormContainer>
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

      <Styled.Button type="submit" disabled={isSubmitting}>
        Login
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
  mapPropsToValues: (props) => {
    return {
      email: props.initialEmail || "",
      password: "",
    };
  },

  validate: (values: FormValues) => {
    let errors: FormikErrors<FormValues> = {};
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
    return errors;
  },

  handleSubmit: (values) => {
    // do submitting things
  },
})(InnerForm);

const SignInForm = () => <MyForm />;

export default SignInForm;
