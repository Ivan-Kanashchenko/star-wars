import * as React from "react";
import { Field, Form, Formik } from "formik";
import { CustomCheckbox } from "../../../StyledComponents/CustomCheckbox/CustomCheckbox";
import { StyledElement } from "../../../StyledComponents/Elements/Elements";
import { useQueryStringParams } from "../../../../customHooks/useQueryStringParams";

export const MadeInForm: React.FC = () => {
  const { searchParams, setParams } = useQueryStringParams();

  const isCountry = searchParams.has("country");
  return (
    <>
      <Formik
        initialValues={{
          country: searchParams.get("country") || [],
        }}
        onSubmit={(values) => {
          setParams("country", values.country.toString());
        }}
      >
        {({ handleSubmit }) => (
          <Form
            onSubmit={handleSubmit}
            onChange={(e) => {
              e.preventDefault();
              // e.stopPropagation();
              handleSubmit();
            }}
          >
            <StyledElement.Section borderTop>
              <Field
                name="country"
                value="Vacanda"
                type="checkbox"
                label={"Vacanda"}
                component={CustomCheckbox}
                checked={
                  isCountry && searchParams.get("country").includes("Vacanda")
                }
              />
              <Field
                name="country"
                value="Ukraine"
                type="checkbox"
                label={"Ukraine"}
                component={CustomCheckbox}
                checked={
                  isCountry && searchParams.get("country").includes("Ukraine")
                }
              />
              <Field
                name="country"
                value="Germany"
                type="checkbox"
                label={"Germany"}
                component={CustomCheckbox}
                checked={
                  isCountry && searchParams.get("country").includes("Germany")
                }
              />
              <Field
                name="country"
                value="China"
                type="checkbox"
                label={"China"}
                component={CustomCheckbox}
                checked={
                  isCountry && searchParams.get("country").includes("China")
                }
              />
              <Field
                name="country"
                value="Vietnam"
                type="checkbox"
                label={"Vietnam"}
                component={CustomCheckbox}
                checked={
                  isCountry && searchParams.get("country").includes("Vietnam")
                }
              />
            </StyledElement.Section>
          </Form>
        )}
      </Formik>
    </>
  );
};
