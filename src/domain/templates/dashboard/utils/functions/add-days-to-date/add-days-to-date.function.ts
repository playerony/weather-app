import { isDate, isNumber } from '@utils';

export function addDaysToDate(date: Date, days: number): Date | null {
  if (!isDate(date) || !isNumber(days)) {
    return null;
  }

  const newData = new Date(date);
  newData.setDate(newData.getDate() + days);

  return newData;
}
