import { getFormatedTime } from "./getFormatedTime";

describe("getFormatedTime", () => {
  test("getTime", () => {
    expect(getFormatedTime(0)).toBe("00");
  });
  test("getTime", () => {
    expect(getFormatedTime(1)).toBe("01");
  });
  test("getTime", () => {
    expect(getFormatedTime(10)).toBe("10");
  });
});
