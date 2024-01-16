import { Card } from './interfaces';
import { SiUml, SiGithub, SiSpeedtest, SiApplemusic } from 'react-icons/si';
import { RiSpeakLine, RiBook2Line } from 'react-icons/ri';
export const skills: Card[] = [
  {
    label: 'App Design',
    logo: <SiUml />,
    description:
      'Designing models, microservices, or high-level apps is critical in the SDLC. I use UML to help communicate effectively and collaborate with team members on key requirements. A visual helps keep the project in scope and clear to all stakeholders.',
  },
  {
    label: 'Pipelines',
    logo: <SiGithub />,
    description:
      'While Github is ubiquitous for version control and code review, I like to use Github Actions to create pipelines that can update docker containers or push code to cloud-native applications that accomplish CI/CD.',
  },
  {
    label: 'Effective Communicator',
    logo: <RiSpeakLine />,
    description:
      'Collaboration requires speaking with clarity to technical team members and with non-technical stakeholders alike.  I have led a small team and cross-departmental Zoom calls, driving and executing projects or timelines as the business needs.',
  },
  {
    label: 'Test Driven Development',
    logo: <SiSpeedtest />,
    description:
      "Not all functionality requires TDD; developers should know when it is most appropriate, but if time is permitted, it's a necessary tool that I use for foundationally good software.",
  },
  {
    label: 'Continuous Learning',
    logo: <RiBook2Line />,
    description:
      'Experimenting with new libraries/tech stacks and reading dry technical books is (actually) fun to me because I either learn something new or it could be something I have seen before using different approaches or contexts, which expands my versatility as an engineer.',
  },
  {
    label: 'Musician',
    logo: <SiApplemusic />,
    description:
      'Music is a big part of my life as an alternative hobby outside coding.  I play drums, guitar, and cello.  I have some experience with piano, but that is next on my list to study.  I enjoy having a creative outlet playing solo or jamming with other musicians.',
  },
];
