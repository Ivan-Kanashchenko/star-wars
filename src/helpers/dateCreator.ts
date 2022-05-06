import { getMonthName } from "./getMonthName";
import { Timestamp } from "firebase/firestore";
import { getFormatedTime } from "./getFormatedTime";

export const dateCreator = (timeStamp: Timestamp): string => {
  const time = timeStamp?.toDate();

  return `${getMonthName(time.getMonth())} ${time.getDay()}, ${getFormatedTime(
    time.getHours()
  )}:${getFormatedTime(time.getMinutes())}`;
};
