import { Timestamp } from "firebase/firestore";
import { dateCreator } from "./dateCreator";

describe("dateCreator test", () => {
  const time = new Timestamp(1652105581, 622000000);
  test("dateCreator", () => {
    expect(dateCreator(time)).toBe("May 9, 17:13");
  });
});