import * as React from "react";
import { Field, Form, Formik } from "formik";
import { CustomCheckbox } from "../../../StyledComponents/CustomCheckbox/CustomCheckbox";
import { StyledElement } from "../../../StyledComponents/Elements/Elements";

export const CompanyForm: React.FC = () => {
  return (
    <Formik
      initialValues={{
        company: [],
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
          <StyledElement.Section>
            {/* <StyledElement.H5>Seller</StyledElement.H5> */}
            <Field
              name="company"
              value="rozetka"
              type="checkbox"
              label={"rozetka"}
              component={CustomCheckbox}
            />
            <Field
              name="company"
              value="funnyBunny"
              type="checkbox"
              label={"Funny Bunny"}
              component={CustomCheckbox}
            />
            <Field
              name="company"
              value="lucasArt"
              type="checkbox"
              label={"Lucas Art"}
              component={CustomCheckbox}
            />
          </StyledElement.Section>
        </Form>
      )}
    </Formik>
  );
};
