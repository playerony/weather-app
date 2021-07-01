import { Label } from '@ui';

import { kelvinToCelcius, kelvinToFahrenheit } from '@utils';
import S from './weather-list-item.styles';

import { WeatherListItemProps } from './weather-list-item.types';

const makeImageUrl = (icon: string): string => `https://openweathermap.org/img/w/${icon}.png`;

const WIND_UNIT = 'm/s';
const CELSIUS_UNIT = '℃';
const FAHRENHEIT_UNIT = '℉';

export function WeatherListItem({ details, isCelsius }: WeatherListItemProps): JSX.Element {
  const hours = details.dt_txt.split(' ')[1];

  const minTemperature = details.main.temp_min;
  const maxTemperature = details.main.temp_max;
  const minTemperatureInCelcius = kelvinToCelcius(minTemperature);
  const maxTemperatureInCelcius = kelvinToCelcius(maxTemperature);
  const minTemperatureInFahrenheit = kelvinToFahrenheit(minTemperature);
  const maxTemperatureInFahrenheit = kelvinToFahrenheit(maxTemperature);

  const minTemperatureForSelectedUnit = isCelsius
    ? minTemperatureInCelcius
    : minTemperatureInFahrenheit;

  const maxTemperatureForSelectedUnit = isCelsius
    ? maxTemperatureInCelcius
    : maxTemperatureInFahrenheit;

  const temperatureUnit = isCelsius ? CELSIUS_UNIT : FAHRENHEIT_UNIT;

  const wind = details.wind.speed;
  const { icon, description } = details.weather[0];

  return (
    <S.StyledWrapper>
      <Label strong>{hours}</Label>
      <Label>
        Min:{' '}
        <Label strong sameLine>
          {minTemperatureForSelectedUnit.toFixed(2)} {temperatureUnit}
        </Label>
      </Label>
      <Label>
        Max:{' '}
        <Label strong sameLine>
          {maxTemperatureForSelectedUnit.toFixed(2)} {temperatureUnit}
        </Label>
      </Label>
      <img alt="weather-icon" src={makeImageUrl(icon)} title={description} />
      <Label>
        Wind:{' '}
        <Label strong sameLine>
          {wind} {WIND_UNIT}
        </Label>
      </Label>
    </S.StyledWrapper>
  );
}
