import { Timestamp } from "firebase/firestore";
import { dateCreator } from "./dateCreator";

const time = new Timestamp(1652105581, 622000000);

describe("dateCreator test", () => {
  test("dateCreator", () => {
    expect(dateCreator(time)).toBe("May 9, 17:13");
  });
});
