import { Icon } from '../AboutMe/interfaces';

export interface Project {
  title: string;
  description: string;
  stackIcons: Icon[];
}
export interface CarouselProject {
  title: string;
  projectList: Project[];
}
