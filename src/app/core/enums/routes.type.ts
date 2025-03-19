export const ROUTES = {
  HOME: 'home',
  ABOUT: 'about',
  PROJECTS: 'projects',
  CONTACT: 'contact',
} as const;

export type ROUTES = (typeof ROUTES)[keyof typeof ROUTES];
