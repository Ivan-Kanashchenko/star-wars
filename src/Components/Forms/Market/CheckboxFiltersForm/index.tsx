import React, { FC } from "react";
import { Field, Form, Formik } from "formik";

import { useQueryStringParams } from "customHooks/useQueryStringParams";

import { CustomCheckbox, StyledElement } from "ui";

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

export const CheckboxFiltersForm: FC<FormProps> = ({ data }) => {
  const { searchParams, setParams } = useQueryStringParams();

  const isData = searchParams.has(data.type);

  return (
    <Formik
      initialValues={{
        [data.type]: [searchParams.get(data.type)] || [],
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
