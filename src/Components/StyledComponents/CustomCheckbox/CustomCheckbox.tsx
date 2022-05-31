import * as React from "react";
import { FormControlLabel } from "@material-ui/core";
import { FormikValues } from "formik";
import { StyledCheckbox } from "./styles";

interface CustomProps {
  label: string;
  name: string;
  active: boolean;
}

export const CustomCheckbox: React.FC<CustomProps & FormikValues> = ({
  label,
  name,
  field,
  ...props
}) => {
  return (
    <FormControlLabel
      control={
        <StyledCheckbox size="medium" name={name} {...field} {...props} />
      }
      label={label}
    />
  );
};
