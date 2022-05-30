import * as React from "react";
import {
  Checkbox,
  CheckboxProps,
  FormControlLabel,
  withStyles,
} from "@material-ui/core";
import { theme } from "../../../theme";
import { FormikValues } from "formik";

const StyledMaterialCheckbox = withStyles({
  root: {
    color: theme.primary3,
    "&$checked": {
      color: theme.primary3,
    },
  },
  checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);

interface CustomProps {
  label: string;
  name: string;
  active: boolean;
}

export const CustomCheckbox: React.FC<CustomProps & FormikValues> = ({
  label,
  name,
  field,
  active,
  ...props
}) => {
  return (
    <FormControlLabel
      control={
        <StyledMaterialCheckbox
          // checked={active}
          size="medium"
          name={name}
          {...field}
          {...props}
        />
      }
      label={label}
    />
  );
};
