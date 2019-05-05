import moment from "moment";
import { COST_PER_DAY } from "./constants/Price";

export const calcNumDays = (startDate, endDate) => {
  if (startDate !== '' && endDate !== '') {
    return moment(endDate).date() - moment(startDate).date() + 1;
  } else {
    return '';
  }
}

export const calcCost = (startDate, endDate) => {
  if (startDate !== '' && endDate !== '') {
    return calcNumDays(startDate, endDate) * COST_PER_DAY
  } else {
    return ''
  }
}
