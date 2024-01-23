import { Icon } from '../AboutMe/interfaces';
import {
  SiNestjs,
  SiPostgresql,
  SiRabbitmq,
  SiTypescript,
} from 'react-icons/si';

export const stackIcons: Icon[] = [
  { name: 'NestJs', label: <SiNestjs /> },
  { name: 'Postgres', label: <SiPostgresql /> },
  { name: 'RabbitMQ', label: <SiRabbitmq /> },
  { name: 'TypeScript', label: <SiTypescript /> },
];
