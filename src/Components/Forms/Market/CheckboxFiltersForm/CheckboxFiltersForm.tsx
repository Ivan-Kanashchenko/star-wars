import * as React from "react";
import { Field, Form, Formik } from "formik";
import { CustomCheckbox } from "../../../StyledComponents/CustomCheckbox/CustomCheckbox";
import { StyledElement } from "../../../StyledComponents/Elements/Elements";
import { useQueryStringParams } from "../../../../customHooks/useQueryStringParams";

interface FormProps {
  data: {
    type: string;
    filters: {
      id: number;
      name: string;
      type: string;
      label: string;
      value: string;
    }[];
  };
}

export const CheckboxFiltersForm: React.FC<FormProps> = ({ data }) => {
  const { searchParams, setParams } = useQueryStringParams();

  const isData = searchParams.has(data.type);

  return (
    <Formik
      initialValues={{
        [data.type]: searchParams.get(data.type) || [],
      }}
      onSubmit={(values: { [x: string]: { toString: () => string } }) =>
        setParams(data.type, values[data.type].toString())
      }
    >
      {({ handleSubmit }) => (
        <Form onChange={() => handleSubmit()}>
          <StyledElement.Section>
            {data.filters.map((filter) => (
              <Field
                key={filter.id}
                name={filter.name}
                value={filter.value}
                type={filter.type}
                label={filter.label}
                component={CustomCheckbox}
                checked={
                  isData && searchParams.get(filter.name).includes(filter.value)
                }
              />
            ))}
          </StyledElement.Section>
        </Form>
      )}
    </Formik>
  );
};
