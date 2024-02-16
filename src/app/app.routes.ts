import { Routes } from '@angular/router';
import CoursesComponent  from './courses/courses.component';

export const routes: Routes = [
  { path:'', component:CoursesComponent},
  { path:'courses',
    loadComponent: () => import('./courses/courses.component') }

];
