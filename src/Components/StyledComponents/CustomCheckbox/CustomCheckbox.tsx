import * as React from "react";
import {
  Checkbox,
  CheckboxProps,
  FormControlLabel,
  withStyles,
} from "@material-ui/core";
import { theme } from "../../../theme";

const GreenCheckbox = withStyles({
  root: {
    color: theme.primary3,
    "&$checked": {
      color: theme.primary3,
    },
  },
  checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);

export const CustomCheckbox: React.FC<{ label: string; name: string }> = ({
  label,
  name,
}) => {
  const [checked, setChecked] = React.useState<boolean>(false);

  return (
    <FormControlLabel
      control={
        <GreenCheckbox
          size="medium"
          checked={checked}
          onChange={() => setChecked(!checked)}
          name={name}
        />
      }
      label={label}
    />
  );
};
