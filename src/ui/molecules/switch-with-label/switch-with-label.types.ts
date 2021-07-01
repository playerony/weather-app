import { InputHTMLAttributes } from 'react';

export interface SwitchWithLabelProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}
