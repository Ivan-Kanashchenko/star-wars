import * as React from "react";
import { Field, Form, Formik } from "formik";
import { CustomCheckbox } from "../../../StyledComponents/CustomCheckbox/CustomCheckbox";
import { StyledElement } from "../../../StyledComponents/Elements/Elements";

export const ProductTypeForm: React.FC = () => {
  return (
    <Formik
      initialValues={{
        type: [],
      }}
      onSubmit={(values) => {
        // eslint-disable-next-line no-alert
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ handleSubmit }) => (
        <Form
          onSubmit={handleSubmit}
          onChange={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <StyledElement.Section borderTop>
            <StyledElement.H5>Type</StyledElement.H5>
            <Field
              name="type"
              value="single"
              type="checkbox"
              label={"one toy"}
              component={CustomCheckbox}
            />
            <Field
              name="type"
              value="set"
              type="checkbox"
              label={"toy set"}
              component={CustomCheckbox}
            />
          </StyledElement.Section>
        </Form>
      )}
    </Formik>
  );
};
