import { useState, Children } from 'react';

import { MediumHeading, SwitchWithLabel } from '@ui';
import { useDebounce } from '@utils';
import { WeatherListItem } from '..';
import S from './weather-list.styles';

import { WeatherListProps } from './weather-list.types';

export const WeatherList = ({ heading, listItems }: WeatherListProps): JSX.Element => {
  const [isCelsius, setIsCelsius] = useState<boolean>(true);
  const debouncedIsCelsius = useDebounce(isCelsius, 500);

  const onSwitchClick = (): void => setIsCelsius(!isCelsius);

  return (
    <S.StyledWrapper data-test-id="weather-list">
      <MediumHeading modifiers={['center']}>{heading}</MediumHeading>
      <SwitchWithLabel
        readOnly
        checked={isCelsius}
        onClick={onSwitchClick}
        label="Fahrenheit / Celsius"
      />
      <div>
        {Children.toArray(
          listItems.map((_listItem) => (
            <WeatherListItem isCelsius={debouncedIsCelsius} details={_listItem} />
          )),
        )}
      </div>
    </S.StyledWrapper>
  );
};
