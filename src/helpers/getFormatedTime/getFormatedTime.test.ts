import { getFormatedTime } from "./getFormatedTime";

describe("getFormatedTime", () => {
  const error =
    "Error with getFormatedTime function. Function must accept single and double digit numbers";

  test("getTime with single digits numbers", () => {
    expect(getFormatedTime(0)).toBe("00");
    expect(getFormatedTime(9)).toBe("09");
  });

  test("getTime with double digit numbers", () => {
    expect(getFormatedTime(10)).toBe("10");
  });

  test("getTime with with other numbers", () => {
    expect(() => getFormatedTime(100)).toThrowError(error);
  });
});