export const getFormatedTime = (value: number): string => {
  switch (value.toString().length) {
    case 1:
      return `0${value}`;
    default:
      return value.toString();
  }
};
