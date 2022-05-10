import { getFormatedTime } from "./getFormatedTime";

describe("getFormatedTime", () => {
  const error =
    "Error with getFormatedTime function. Function must accept single and double digit numbers";

  test("getTime with single digits numbers", () => {
    expect(getFormatedTime(0)).toBeDefined();
    expect(getFormatedTime(1)).not.toBeNull();
    expect(getFormatedTime(2)).toBe("02");
    expect(getFormatedTime(3)).toBe("03");
  });

  test("getTime with double digit numbers", () => {
    expect(getFormatedTime(10)).toBeDefined();
    expect(getFormatedTime(30)).not.toBeNull();
    expect(getFormatedTime(10)).toBe("10");
  });

  test("getTime with with other numbers", () => {
    expect(() => getFormatedTime(100)).toThrowError(error);
    // @ts-ignore
    expect(() => getFormatedTime()).toThrowError(error);
  });
});
