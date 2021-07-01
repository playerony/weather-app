import { Label } from '@ui';

import S from './weather-list-item.styles';
import { formatTemperature } from '../../utils';

import { WeatherListItemProps } from './weather-list-item.types';

const WIND_UNIT = 'm/s';
const CELSIUS_UNIT = '℃';
const FAHRENHEIT_UNIT = '℉';

const makeImageUrl = (icon: string): string => `https://openweathermap.org/img/w/${icon}.png`;

const formatHours = (hours: string): string => hours.split(':').slice(0, 2).join(':');

export function WeatherListItem({ details, isCelsius }: WeatherListItemProps): JSX.Element {
  const hours = details.dt_txt.split(' ')[1];
  const formattedHours = formatHours(hours);

  const temperatureUnit = isCelsius ? CELSIUS_UNIT : FAHRENHEIT_UNIT;
  const minTemperature = formatTemperature(details.main.temp_min, isCelsius);
  const maxTemperature = formatTemperature(details.main.temp_max, isCelsius);

  const wind = details.wind.speed;
  const { icon, description } = details.weather[0];

  return (
    <S.StyledWrapper>
      <Label strong>{formattedHours}</Label>
      <Label>
        Min:{' '}
        <Label strong sameLine>
          {minTemperature} {temperatureUnit}
        </Label>
      </Label>
      <Label>
        Max:{' '}
        <Label strong sameLine>
          {maxTemperature} {temperatureUnit}
        </Label>
      </Label>
      <S.StyledImage alt="weather-icon" src={makeImageUrl(icon)} title={description} />
      <Label>
        Wind:{' '}
        <Label strong sameLine>
          {wind} {WIND_UNIT}
        </Label>
      </Label>
    </S.StyledWrapper>
  );
}
