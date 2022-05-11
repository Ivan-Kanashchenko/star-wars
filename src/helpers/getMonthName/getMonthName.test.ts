import { getMonthName } from "./getMonthName";

describe("getMonthValidation", () => {
  describe("valid values", () => {
    const monthes = [
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
    test("must recieve name of month", () => {
      monthes.forEach((value, idx) => {
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