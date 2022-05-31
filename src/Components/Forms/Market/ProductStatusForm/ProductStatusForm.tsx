import { Field, Form, Formik } from "formik";
import * as React from "react";
import { useQueryStringParams } from "../../../../customHooks/useQueryStringParams";
import { CustomCheckbox } from "../../../StyledComponents/CustomCheckbox/CustomCheckbox";
import { StyledElement } from "../../../StyledComponents/Elements/Elements";

export const ProductStatusForm: React.FC = () => {
  const { searchParams, setParams } = useQueryStringParams();

  const isStock = searchParams.has("stock");

  return (
    <Formik
      initialValues={{
        stock: searchParams.get("stock") || [],
      }}
      onSubmit={(values) => {
        setParams("stock", values.stock.toString());
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
            <Field
              name="stock"
              value="inStock"
              type="checkbox"
              label={"In stock"}
              component={CustomCheckbox}
              checked={isStock && searchParams.get("stock").includes("inStock")}
            />
            <Field
              name="stock"
              value="notInStock"
              type="checkbox"
              label={"Out of stock"}
              component={CustomCheckbox}
              checked={
                isStock && searchParams.get("stock").includes("notInStock")
              }
            />
          </StyledElement.Section>
        </Form>
      )}
    </Formik>
  );
};
