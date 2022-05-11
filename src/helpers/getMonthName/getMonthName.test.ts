import { getMonthName } from "./getMonthName";

describe("getMonthValidation", () => {
  describe("valid values", () => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    test("getting month`s name", () => {
      months.forEach((value, idx) => {
        expect(getMonthName(idx)).toBe(value);
      });
    });
  });

  describe("invalid values", () => {
    const error =
      "Error with getMonthName function. Month number must be between 0 and 11";

    describe("values not between 0 and 11", () => {
      test("must throw error", () => {
        expect(() => getMonthName(-1)).toThrowError(error);
        expect(() => getMonthName(12)).toThrowError(error);
      });
    });
  });
});
