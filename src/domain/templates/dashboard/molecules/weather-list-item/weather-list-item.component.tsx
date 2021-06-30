import { Label } from '@ui';

import S from './weather-list-item.styles';

import { WeatherListItemProps } from './weather-list-item.types';

const makeImageUrl = (icon: string): string => `http://openweathermap.org/img/w/${icon}.png`;

export function WeatherListItem({ details }: WeatherListItemProps): JSX.Element {
  const hours = details.dt_txt.split(' ')[1];
  const minTemperature = details.main.temp_min;
  const maxTemperature = details.main.temp_max;
  const wind = details.wind.speed;
  const { icon } = details.weather[0];

  return (
    <S.StyledWrapper>
      <Label strong>{hours}</Label>
      <Label>
        Min:{' '}
        <Label strong sameLine>
          {minTemperature}
        </Label>
      </Label>
      <Label>
        Max:{' '}
        <Label strong sameLine>
          {maxTemperature}
        </Label>
      </Label>
      <img alt="weather-icon" src={makeImageUrl(icon)} />
      <Label>
        Wind:{' '}
        <Label strong sameLine>
          {wind} m/s
        </Label>
      </Label>
    </S.StyledWrapper>
  );
}
