import { Field, Form, Formik } from "formik";
import * as React from "react";
import { CustomCheckbox } from "../../../StyledComponents/CustomCheckbox/CustomCheckbox";
import { StyledElement } from "../../../StyledComponents/Elements/Elements";

export const ProductStatusForm: React.FC = () => {
  return (
    <Formik
      initialValues={{
        stock: [],
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
          <StyledElement.Section borderTop borderBottom>
            <StyledElement.H5>Product status</StyledElement.H5>
            <Field
              name="stock"
              value="inStock"
              type="checkbox"
              label={"In stock"}
              component={CustomCheckbox}
            />
            <Field
              name="stock"
              value="notInStock"
              type="checkbox"
              label={"Out of stock"}
              component={CustomCheckbox}
            />
          </StyledElement.Section>
        </Form>
      )}
    </Formik>
  );
};
