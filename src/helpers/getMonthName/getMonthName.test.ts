import { getMonthName } from "./getMonthName";

describe("getMonthValidation", () => {
  test("getJanuary", () => {
    expect(getMonthName(1)).toBe("January");
  });
  test("getFebruary", () => {
    expect(getMonthName(2)).toBe("February");
  });
  test("getMarch", () => {
    expect(getMonthName(3)).toBe("March");
  });
  test("getApril", () => {
    expect(getMonthName(4)).toBe("April");
  });
  test("getMay", () => {
    expect(getMonthName(5)).toBe("May");
  });
  test("getJune", () => {
    expect(getMonthName(6)).toBe("June");
  });
  test("getJuly", () => {
    expect(getMonthName(7)).toBe("July");
  });
  test("getAugust", () => {
    expect(getMonthName(8)).toBe("August");
  });
  test("getSeptember", () => {
    expect(getMonthName(9)).toBe("September");
  });
  test("getOctober", () => {
    expect(getMonthName(10)).toBe("October");
  });
  test("getNovember", () => {
    expect(getMonthName(11)).toBe("November");
  });
  test("getDecember", () => {
    expect(getMonthName(12)).toBe("December");
  });
  test("Error in getMonthName", () => {
    expect(getMonthName(0)).toBe("Error in getMonthName");
    expect(getMonthName(13)).toBe("Error in getMonthName");
  });
});
