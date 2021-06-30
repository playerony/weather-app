import { Children } from 'react';

import { BigHeading } from '@ui';
import { WeatherListItem } from '..';
import S from './weather-list.styles';

import { WeatherListProps } from './weather-list.types';

export const WeatherList = ({ heading, listItems }: WeatherListProps): JSX.Element => (
  <S.StyledWrapper>
    <BigHeading>{heading}</BigHeading>
    {Children.toArray(listItems.map((_listItem) => <WeatherListItem details={_listItem} />))}
  </S.StyledWrapper>
);
