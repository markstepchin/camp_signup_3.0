import moment from "moment";
import { COST_PER_DAY } from "./Constants";

export const calcNumDays = (startDate, endDate) => moment(endDate).date() - moment(startDate).date() + 1;
export const calcCost = (startDate, endDate) => calcNumDays(startDate, endDate) * COST_PER_DAY;
