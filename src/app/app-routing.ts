import { Routes } from '@angular/router';
import { FrameComponent } from './layout/frame/frame.component';

export const routes: Routes = [
  {
    path: '',
    component: FrameComponent,
    loadChildren: () => import('./features/routing').then((m) => m.routes),
  },
];
