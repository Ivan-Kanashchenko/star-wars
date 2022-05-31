import * as React from "react";
import {
  Checkbox,
  CheckboxProps,
  FormControlLabel,
  withStyles,
} from "@material-ui/core";
import { theme } from "../../../theme";
import { FormikValues } from "formik";

const StyledCheckbox = withStyles({
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
  ...props
}) => {
  return (
    <FormControlLabel
      control={
        <StyledCheckbox
          size="medium"
          name={name}
          {...field}
          {...props}
          onChange={(ha) => ha}
        />
      }
      label={label}
    />
  );
};
