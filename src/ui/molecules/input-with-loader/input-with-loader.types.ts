import { InputHTMLAttributes } from 'react';

export interface InputWithLoaderProps extends InputHTMLAttributes<HTMLInputElement> {
  isLoading: boolean;
}
