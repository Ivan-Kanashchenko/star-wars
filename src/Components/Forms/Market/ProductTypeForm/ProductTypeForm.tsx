import * as React from "react";
import { Field, Form, Formik } from "formik";
import { CustomCheckbox } from "../../../StyledComponents/CustomCheckbox/CustomCheckbox";
import { StyledElement } from "../../../StyledComponents/Elements/Elements";
import { useQueryStringParams } from "../../../../customHooks/useQueryStringParams";

export const ProductTypeForm: React.FC = () => {
  const { searchParams, setParams } = useQueryStringParams();

  const isType = searchParams.has("type");

  return (
    <Formik
      initialValues={{
        type: searchParams.get("type") || [],
      }}
      onSubmit={(values) => {
        setParams("type", values.type.toString());
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
            <Field
              name="type"
              value="single"
              type="checkbox"
              label={"one toy"}
              component={CustomCheckbox}
              checked={isType && searchParams.get("type").includes("single")}
            />
            <Field
              name="type"
              value="set"
              type="checkbox"
              label={"toy set"}
              component={CustomCheckbox}
              checked={isType && searchParams.get("type").includes("set")}
            />
          </StyledElement.Section>
        </Form>
      )}
    </Formik>
  );
};
