import * as React from "react";
import { Slider, withStyles } from "@material-ui/core/";
import { theme } from "../../../theme";

const CustomSlider = withStyles({
  root: {
    color: "gray",
    height: 3,
    padding: "10px 0 5px 0",
  },
  thumb: {
    height: 10,
    width: 10,
    backgroundColor: theme.primary4,
    border: `1px solid ${theme.primary3} `,
    marginTop: -3.5,
    marginLeft: -3.5,
    boxShadow: "#ebebeb 0 2px 2px",
    "&:focus, &:hover, &$active": {
      boxShadow: "#ccc 0 2px 3px 1px",
    },
    "&:hover": {
      border: `1px solid ${theme.primary1}`,
    },
    "& .bar": {
      height: 9,
      width: 1,
      backgroundColor: "currentColor",
      marginLeft: 1,
      marginRight: 1,
    },
  },
  active: {},
  track: {
    height: 3,
  },
  rail: {
    color: "#d8d8d8",
    opacity: 1,
    height: 3,
  },
})(Slider);

export const MultiRangeSlider: React.FC<{
  maxValue: number | null;
  minValue: number | null;
  setMinValue: (arg: number) => void;
  setMaxValue: (arg: number) => void;
}> = ({ minValue, maxValue, setMinValue, setMaxValue }) => {
  const setValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.ariaLabel === "Maximum price" &&
      setMaxValue(Number(e.target.ariaValueNow));
    e.target.ariaLabel === "Minimum price" &&
      setMinValue(Number(e.target.ariaValueNow));
  };
  return (
    <CustomSlider
      getAriaLabel={(index) =>
        index === 0 ? "Minimum price" : "Maximum price"
      }
      min={0}
      max={5000}
      defaultValue={[minValue, maxValue]}
      onChange={setValues}
    />
  );
};
