import type { Photo } from './home';

export interface StorySection {
  id: string;
  heading: string;
  paragraphs: string[];
  items?: string[];
}

export interface ProjectDetail {
  slug: string;
  title: string;
  summary: string;
  role: string;
  users: string;
  screenshots: { image: Photo; caption: string }[];
  story: StorySection[];
  technologies: string[];
  links: { github: string; live: string };
}

// Bracketed text marks details Andy still needs to supply. No outcomes are assumed.
// Add screenshots to public/images and set src to /images/filename.png.
// Leave optional URLs empty to hide their links. Use full HTTPS URLs when supplied.
export const projects: ProjectDetail[] = [
  {
    slug: 'mcc-member-app',
    title: 'MCC Member App',
    summary: 'A mobile app for Mississauga Chess Club members to register for tournaments and check in online.',
    role: 'Developer. [Add what I personally designed and built, and who else contributed.]',
    users: 'Mississauga Chess Club members. [Add who has used it and its current rollout status.]',
    screenshots: [
      { image: { src: '', alt: '', placeholder: '[Member app screenshot]' }, caption: '[Add a screenshot and explain the task shown.]' },
      { image: { src: '', alt: '', placeholder: '[Registration / check-in screenshot]' }, caption: '[Add a second view and explain how it fits into the app.]' },
    ],
    story: [
      { id: 'why', heading: 'Why I built it', paragraphs: ['This grew out of my involvement and volunteering with Mississauga Chess Club.', '[Describe how registration and check-in worked before, the problem I noticed, and why I decided to build an app.]'] },
      { id: 'features', heading: 'What it does', paragraphs: [], items: ['Tournament registration for club members.', 'Online check-in.', '[Add any other features and clarify how registration and check-in work.]'] },
      { id: 'decisions', heading: 'Choices along the way', paragraphs: ['[Describe a design or technical decision, the alternatives I considered, and why I chose this approach.]'] },
      { id: 'challenges', heading: 'What was tricky', paragraphs: ['[Describe a real challenge or constraint, and how I worked through it.]'] },
      { id: 'outcome', heading: 'After people used it', paragraphs: ['[Describe the rollout, feedback, and what changed. If it has not been released, describe its current stage instead.]'] },
      { id: 'learning', heading: 'What I learned', paragraphs: ['[Share a specific lesson from building or maintaining this app, and what I would do differently next time.]'] },
    ],
    technologies: ['[Add the languages, framework, and services actually used.]'],
    links: { github: '', live: '' },
  },
  {
    slug: 'mcc-tournament-administration-system',
    title: 'MCC Tournament Administration System',
    summary: 'An administrative system for tournament check-in, player management, and name-card operations.',
    role: 'Developer. [Add my responsibilities, whether I worked alone, and any collaborators.]',
    users: '[Specify which tournament organizers, volunteers, or other people used the system.]',
    screenshots: [
      { image: { src: '', alt: '', placeholder: '[Tournament administration screenshot]' }, caption: '[Add a screenshot and explain the workflow shown.]' },
      { image: { src: '', alt: '', placeholder: '[Player / name-card management screenshot]' }, caption: '[Add another view and explain what it helps people do.]' },
    ],
    story: [
      { id: 'why', heading: 'Why I built it', paragraphs: ['This project grew out of my involvement and volunteering with Mississauga Chess Club.', '[Describe the earlier tournament administration process, what needed improving, and the moment that prompted this project.]'] },
      { id: 'features', heading: 'What it does', paragraphs: [], items: ['Tournament check-in.', 'Player tracking and management.', 'Name-card management.', '[Explain these workflows and add any other confirmed features.]'] },
      { id: 'decisions', heading: 'Choices along the way', paragraphs: ['[Describe a design or technical choice and why it made sense for the people running tournaments.]'] },
      { id: 'challenges', heading: 'What was tricky', paragraphs: ['[Describe an actual constraint or difficult part of building or using the system, and how I handled it.]'] },
      { id: 'outcome', heading: 'After people used it', paragraphs: ['[Describe where it was used, what changed for organizers, and any feedback or results I can verify.]'] },
      { id: 'learning', heading: 'What I learned', paragraphs: ['[Share a specific lesson and something I would improve in a future version.]'] },
    ],
    technologies: ['[Add the languages, framework, and services actually used.]'],
    links: { github: '', live: '' },
  },
];
