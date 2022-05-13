import * as React from "react";
import { FC } from "react";
import { Formik, FormikValues } from "formik";
import { Field } from "formik";
import { useChat } from "../../../chat/useChat";
import { Styled } from "./styles";

const ChatForm: FC = () => {
  const { sendMessage } = useChat();

  return (
    <Formik
      initialValues={{
        message: "",
      }}
      onSubmit={(values, actions) => {
        if (values.message) {
          sendMessage(values.message);
          actions.resetForm();
        }
      }}
    >
      {({ handleSubmit }) => (
        <Styled.FormContainer
          onSubmit={handleSubmit}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSubmit();
            }
          }}
        >
          <Field
            name="message"
            component={CustomInputComponent}
            placeholder="enter your message"
          />
          <Styled.SendButton type="submit"></Styled.SendButton>
        </Styled.FormContainer>
      )}
    </Formik>
  );
};

const CustomInputComponent: FC<FormikValues> = ({ field, ...props }) => (
  <Styled.FormInput type="text" {...field} {...props} />
);

export default ChatForm;
