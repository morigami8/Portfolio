import { ReactElement } from 'react';
import { IconType } from 'react-icons';

export interface Icon {
  name: string;
  label: ReactElement<IconType, IconType> | string;
}
