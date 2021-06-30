import { ListItem, WeatherApiResponse } from '@domain';

import { addDaysToDate } from '..';

export function getDataForThreeDays(results: WeatherApiResponse | null): ListItem[] | null {
  if (!results) {
    return null;
  }

  const startDate = new Date(results.list[0].dt_txt);
  const endDate = addDaysToDate(startDate, 3);

  if (!endDate) {
    return null;
  }

  return results.list.filter((_listItem) => {
    const listItemDate = new Date(_listItem.dt_txt);

    return listItemDate < endDate;
  });
}
