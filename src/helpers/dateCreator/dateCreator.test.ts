import { Timestamp } from "firebase/firestore";
import { dateCreator } from ".";

describe("date creating", () => {
  const time = new Timestamp(1652105581, 622000000);
  test("get date and time from Timestamp", () => {
    expect(dateCreator(time)).toBe("May 9, 17:13");
  });
});
