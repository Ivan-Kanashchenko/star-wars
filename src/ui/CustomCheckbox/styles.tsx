import React from "react";
import { theme } from "../../theme";
import { Checkbox, CheckboxProps, withStyles } from "@material-ui/core";

export const StyledCheckbox = withStyles({
  root: {
    color: theme.color.primary3,
    "&$checked": {
      color: theme.color.primary3,
    },
  },
  checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);
