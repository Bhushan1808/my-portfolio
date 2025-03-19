import { ROUTES } from '../core/enums';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { Route } from '@angular/router';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

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
    component: AboutComponent,
  },
  {
    path: ROUTES.PROJECTS,
    component: ProjectsComponent,
  },
  {
    path: ROUTES.CONTACT,
    component: ContactComponent,
  },
];
