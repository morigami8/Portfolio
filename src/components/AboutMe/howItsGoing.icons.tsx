import { Icon } from './interfaces';
import { FaReact } from 'react-icons/fa6';
import { SiCsharp, SiTypescript, SiMicrosoftazure } from 'react-icons/si';

export const howItsGoingIcons: Icon[] = [
  { name: 'React', label: <FaReact /> },
  { name: 'TypeScript', label: <SiTypescript /> },
  { name: 'C#', label: <SiCsharp /> },
  { name: 'Azure', label: <SiMicrosoftazure /> },
];
