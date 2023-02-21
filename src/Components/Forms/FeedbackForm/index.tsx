import React, { FC } from "react";
import { Field, Formik, FormikValues } from "formik";

import { isValidUserName } from "helpers/validators";

import { Styled } from "./styles";

export const FeedbackForm: FC = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        text: "",
      }}
      onSubmit={(values) => {
        // eslint-disable-next-line no-console
        console.log(values.text);
      }}
    >
      {({ errors, touched }) => (
        <Styled.FormContainer>
          <Styled.Input
            name="name"
            placeholder="name"
            validate={isValidUserName}
            error={!!errors.name}
            touched={!!touched.name}
          />
          <Field
            name="text"
            component={CustomTextArea}
            placeholder="feedback..."
          />
          <Styled.SendButton type="submit">Send</Styled.SendButton>
        </Styled.FormContainer>
      )}
    </Formik>
  );
};

const CustomTextArea: FC<FormikValues> = ({ field, ...props }) => (
  <Styled.TextArea type="text" {...field} {...props} />
);
