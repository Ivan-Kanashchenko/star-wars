import * as React from "react";
import { Checkbox, CheckboxProps, withStyles } from "@material-ui/core";
import { theme } from "../../../theme";

export const StyledCheckbox = withStyles({
  root: {
    color: theme.primary3,
    "&$checked": {
      color: theme.primary3,
    },
  },
  checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);
