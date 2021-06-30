import { isArray } from '@utils';

import { ListItem } from '@domain';
import { ListItemGroup } from './group-list-items-by-date.types';

export function groupListItemsByDate(listItems: ListItem[] | null): ListItemGroup[] | null {
  if (!isArray(listItems)) {
    return null;
  }

  return listItems.reduce<ListItemGroup[]>((_accumulator, _listItem) => {
    const [heading] = _listItem.dt_txt.split(' ');
    const foundHeadingDataIndex = _accumulator.findIndex((_record) => _record.heading === heading);

    const doesGroupExists = foundHeadingDataIndex !== -1;

    if (doesGroupExists) {
      _accumulator[foundHeadingDataIndex].listItems.push(_listItem);
    } else {
      _accumulator.push({ heading, listItems: [_listItem] });
    }

    return _accumulator;
  }, []);
}
