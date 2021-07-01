import { useState, Children } from 'react';

import { BigHeading, SwitchWithLabel } from '@ui';
import { useDebounce } from '@utils';
import { WeatherListItem } from '..';
import S from './weather-list.styles';

import { WeatherListProps } from './weather-list.types';

export const WeatherList = ({ heading, listItems }: WeatherListProps): JSX.Element => {
  const [isCelsius, setIsCelsius] = useState<boolean>(true);
  const debouncedIsCelsius = useDebounce(isCelsius, 500);

  const onSwitchChange = (): void => {
    setIsCelsius(!isCelsius);
  };

  return (
    <S.StyledWrapper>
      <BigHeading modifiers={['center']}>{heading}</BigHeading>
      <SwitchWithLabel
        readOnly
        checked={isCelsius}
        onClick={onSwitchChange}
        label="Fahrenheit / Celsius"
      />
      <S.StyledItemsWrapper>
        {Children.toArray(
          listItems.map((_listItem) => (
            <WeatherListItem isCelsius={debouncedIsCelsius} details={_listItem} />
          )),
        )}
      </S.StyledItemsWrapper>
    </S.StyledWrapper>
  );
};
