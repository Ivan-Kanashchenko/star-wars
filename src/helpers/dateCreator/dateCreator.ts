import { getMonthName } from "../getMonthName/getMonthName";
import { Timestamp } from "firebase/firestore";
import { getFormatedTime } from "../getFormatedTime/getFormatedTime";

export const dateCreator = (timeStamp: Timestamp): string => {
  const time = timeStamp?.toDate();

  return `${getMonthName(time.getMonth())} ${time.getDate()}, ${getFormatedTime(time.getHours())}:${getFormatedTime(time.getMinutes())}`;
};