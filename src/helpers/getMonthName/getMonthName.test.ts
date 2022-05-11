import { getMonthName } from "./getMonthName";

describe("getMonthValidation", () => {
  describe("valid values", () => {
    test("must recieve January", () => {
      expect(getMonthName(0)).toBe("January");
    });
    test("must recieve June", () => {
      expect(getMonthName(5)).toBe("June");
    });
    test("must recieve December", () => {
      expect(getMonthName(11)).toBe("December");
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
