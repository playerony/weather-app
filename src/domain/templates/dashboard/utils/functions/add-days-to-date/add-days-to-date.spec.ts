import { functionImportTest } from '@utils';
import { addDaysToDate } from './add-days-to-date.function';

describe('addDaysToDate Function', () => {
  functionImportTest(addDaysToDate);

  it('should return null', () => {
    // @ts-ignore
    expect(addDaysToDate({}, null)).toBeNull();

    // @ts-ignore
    expect(addDaysToDate(new Date(), null)).toBeNull();

    // @ts-ignore
    expect(addDaysToDate(undefined, 5)).toBeNull();
  });

  it('should add or subtract provided number of days from the provided date', () => {
    const date = new Date('2021-07-01 00:00:00');

    expect(addDaysToDate(date, 0)).toEqual(date);
    expect(addDaysToDate(date, 3)).toEqual(new Date('2021-07-04 00:00:00'));
    expect(addDaysToDate(date, -3)).toEqual(new Date('2021-06-28 00:00:00'));
  });
});
