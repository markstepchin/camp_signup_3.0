import moment from 'moment';
import { COST_PER_DAY } from './constants/Price';
import { TOTAL_COST } from "./constants/Price";

export const calcNumDays = (startDate, endDate) => {
  if (startDate !== '' && endDate !== '') {
    const sD = moment(endDate);
    const eD = moment(startDate);

    return sD.diff(eD, 'days') + 1;
  }
  return '';
};

export const calcCost = (startDate, endDate) => {
  return TOTAL_COST;
  if (startDate !== '' && endDate !== '') {
    return calcNumDays(startDate, endDate) * COST_PER_DAY;
  }
  return '';
};
