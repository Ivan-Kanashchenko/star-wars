import { Timestamp } from "firebase/firestore";
import { getFormatedTime } from "../getFormatedTime";
import { getMonthName } from "../getMonthName";

export const dateCreator = (timeStamp: Timestamp): string => {
  const time = timeStamp?.toDate();

  return `${getMonthName(time.getMonth())} ${time.getDate()}, ${getFormatedTime(
    time.getHours()
  )}:${getFormatedTime(time.getMinutes())}`;
};
