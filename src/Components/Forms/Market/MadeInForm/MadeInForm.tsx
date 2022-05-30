import * as React from "react";
import { Field, Form, Formik } from "formik";
import { CustomCheckbox } from "../../../StyledComponents/CustomCheckbox/CustomCheckbox";
import { StyledElement } from "../../../StyledComponents/Elements/Elements";

export const MadeInForm: React.FC = () => {
  return (
    <Formik
      initialValues={{
        country: [],
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
            <StyledElement.H5>Producing country</StyledElement.H5>
            <Field
              name="country"
              value="Ukraine"
              type="checkbox"
              label={"Ukraine"}
              component={CustomCheckbox}
            />
            <Field
              name="country"
              value="Germany"
              type="checkbox"
              label={"Germany"}
              component={CustomCheckbox}
            />
            <Field
              name="country"
              value="China"
              type="checkbox"
              label={"China"}
              component={CustomCheckbox}
            />
            <Field
              name="country"
              value="Vietnam"
              type="checkbox"
              label={"Vietnam"}
              component={CustomCheckbox}
            />
          </StyledElement.Section>
        </Form>
      )}
    </Formik>
  );
};
