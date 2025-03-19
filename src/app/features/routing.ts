import { ROUTES } from '../core/enums';
import { HomeComponent } from './home/home.component';
import { Route } from '@angular/router';

export const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: ROUTES.HOME,
    component: HomeComponent,
  },
  {
    path: ROUTES.ABOUT,
    component: HomeComponent,
  },
  {
    path: ROUTES.PROJECTS,
    component: HomeComponent,
  },
  {
    path: ROUTES.CONTACT,
    component: HomeComponent,
  },
];
