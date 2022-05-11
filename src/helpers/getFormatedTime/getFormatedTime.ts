export const getFormatedTime = (value: number): string => {
  const error =
    "Error with getFormatedTime function. Function must accept single and double digit numbers";

  if (!value && value !== 0) {
    throw new Error(error);
  }

  switch (value.toString().length) {
    case 1:
      return `0${value}`;
    case 2:
      return value.toString();
    default:
      throw new Error(error);
  }
};