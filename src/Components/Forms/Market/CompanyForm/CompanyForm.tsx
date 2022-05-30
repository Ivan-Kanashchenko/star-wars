import * as React from "react";
import { Field, Form, Formik } from "formik";
import { CustomCheckbox } from "../../../StyledComponents/CustomCheckbox/CustomCheckbox";
import { StyledElement } from "../../../StyledComponents/Elements/Elements";
import { useQueryStringParams } from "../../../../customHooks/useQueryStringParams";

export const CompanyForm: React.FC = () => {
  const { searchParams, setParams } = useQueryStringParams();

  const isCompany = searchParams.has("company");

  return (
    <Formik
      initialValues={{
        company: searchParams.get("company") || [],
      }}
      onSubmit={(values) => {
        // eslint-disable-next-line no-alert
        // alert(JSON.stringify(values, null, 2));
        setParams("company", values.company.toString());
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
            <Field
              name="company"
              value="rozetka"
              type="checkbox"
              label={"rozetka"}
              component={CustomCheckbox}
              checked={
                isCompany && searchParams.get("company").includes("rozetka")
              }
            />
            <Field
              name="company"
              value="funnyBunny"
              type="checkbox"
              label={"Funny Bunny"}
              component={CustomCheckbox}
              checked={
                isCompany && searchParams.get("company").includes("funnyBunny")
              }
            />
            <Field
              name="company"
              value="lucasArt"
              type="checkbox"
              label={"Lucas Art"}
              component={CustomCheckbox}
              checked={
                isCompany && searchParams.get("company").includes("lucasArt")
              }
            />
          </StyledElement.Section>
        </Form>
      )}
    </Formik>
  );
};
