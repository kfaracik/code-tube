import { Video } from "@shared/api";
import dayjs from "dayjs";

export const formattedDate = (date: Video["snippet"]["publishTime"]) =>
  dayjs(date).format("DD.MM.YYYY");
