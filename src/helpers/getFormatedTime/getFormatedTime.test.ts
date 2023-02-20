import { getFormatedTime } from ".";

describe("Time formatting", () => {
  const error =
    "Error with getFormatedTime function. Function must accept single and double digit numbers";

  test("single digits numbers", () => {
    expect(getFormatedTime(0)).toBe("00");
    expect(getFormatedTime(9)).toBe("09");
  });

  test("double digit numbers", () => {
    expect(getFormatedTime(10)).toBe("10");
  });

  test("other numbers", () => {
    expect(() => getFormatedTime(100)).toThrowError(error);
  });
});
