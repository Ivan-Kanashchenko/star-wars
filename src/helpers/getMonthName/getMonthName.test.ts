import { getMonthName } from "./getMonthName";

describe("getMonthValidation", () => {
  describe("valid values", () => {
    test("must not to be null", () => {
      expect(getMonthName(0)).not.toBeNull();
    });
    test("must be defined", () => {
      expect(getMonthName(0)).toBeDefined();
    });
    test("getJanuary", () => {
      expect(getMonthName(0)).toBe("January");
    });
    test("getFebruary", () => {
      expect(getMonthName(1)).toBe("February");
    });
    test("getMarch", () => {
      expect(getMonthName(2)).toBe("March");
    });
    test("getApril", () => {
      expect(getMonthName(3)).toBe("April");
    });
    test("getMay", () => {
      expect(getMonthName(4)).toBe("May");
    });
    test("getJune", () => {
      expect(getMonthName(5)).toBe("June");
    });
    test("getJuly", () => {
      expect(getMonthName(6)).toBe("July");
    });
    test("getAugust", () => {
      expect(getMonthName(7)).toBe("August");
    });
    test("getSeptember", () => {
      expect(getMonthName(8)).toBe("September");
    });
    test("getOctober", () => {
      expect(getMonthName(9)).toBe("October");
    });
    test("getNovember", () => {
      expect(getMonthName(10)).toBe("November");
    });
    test("getDecember", () => {
      expect(getMonthName(11)).toBe("December");
    });
  });

  describe("invalid values", () => {
    test("values not between", () => {
      expect(() => getMonthName(-1)).toThrowError(
        "Error with getMonthName function. Month number must be between 0 and 11"
      );
      expect(() => getMonthName(13)).toThrowError(
        "Error with getMonthName function. Month number must be between 0 and 11"
      );
    });

    test("without values", () => {
      expect(() => getMonthName(-1)).toThrowError(
        "Error with getMonthName function. Month number must be between 0 and 11"
      );
      // @ts-ignore
      expect(() => getMonthName()).toThrowError(
        "Error with getMonthName function. Month number must be between 0 and 11"
      );
    });
  });
});
