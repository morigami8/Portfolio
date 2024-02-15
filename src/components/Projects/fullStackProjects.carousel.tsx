import {
  SiNestjs,
  SiPostgresql,
  SiRabbitmq,
  SiReact,
  SiTypescript,
} from 'react-icons/si';
import { CarouselProject } from './interfaces';
export const FullStackProjects: CarouselProject = {
  title: 'Fullstack',
  list: [
    {
      title: 'Thumbathon',
      description: 'Create and Resize Thumbnails',
      stackIcons: [
        { name: 'NestJs', label: <SiNestjs /> },
        { name: 'Postgres', label: <SiPostgresql /> },
        { name: 'RabbitMQ', label: <SiRabbitmq /> },
        { name: 'TypeScript', label: <SiTypescript /> },
        { name: 'React', label: <SiReact /> },
      ],
    },
  ],
};
