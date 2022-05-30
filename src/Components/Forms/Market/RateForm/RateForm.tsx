import * as React from "react";
import { Field, Form, Formik } from "formik";
import { CustomCheckbox } from "../../../StyledComponents/CustomCheckbox/CustomCheckbox";
import { StyledElement } from "../../../StyledComponents/Elements/Elements";

export const RateForm: React.FC = () => {
  return (
    <Formik
      initialValues={{
        rate: [],
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
            <StyledElement.H5>Rate</StyledElement.H5>
            <Field
              name="rate"
              value="5"
              type="checkbox"
              label={"5"}
              component={CustomCheckbox}
            />
            <Field
              name="rate"
              value="4"
              type="checkbox"
              label={"4"}
              component={CustomCheckbox}
            />
            <Field
              name="rate"
              value="3"
              type="checkbox"
              label={"3"}
              component={CustomCheckbox}
            />
            <Field
              name="rate"
              value="2"
              type="checkbox"
              label={"2"}
              component={CustomCheckbox}
            />
            <Field
              name="rate"
              value="1"
              type="checkbox"
              label={"1"}
              component={CustomCheckbox}
            />
          </StyledElement.Section>
        </Form>
      )}
    </Formik>
  );
};
