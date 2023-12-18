import { ReactElement } from 'react';
import { IconType } from 'react-icons';

export interface Card {
  label: string;
  logo: ReactElement<IconType, IconType> | string;
  description: string;
}
