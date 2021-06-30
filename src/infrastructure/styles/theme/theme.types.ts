export type Color =
  | 'disabled'
  | 'textColor'
  | 'errorColor'
  | 'primaryColor'
  | 'textOnDisabled'
  | 'errorColorHover'
  | 'errorColorActive'
  | 'primaryHoverColor'
  | 'primaryBackground'
  | 'textColorInverted'
  | 'textColorOnPrimary'
  | 'primaryActiveColor'
  | 'secondaryBackground'
  | 'textFieldBackground';

export interface Theme {
  color: { [key in Color]: string };
}
