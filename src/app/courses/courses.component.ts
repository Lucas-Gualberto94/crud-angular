import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Course } from './model/course';
import { CoursesService } from './services/courses.service';
import { Observable } from 'rxjs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [MatTableModule, MatCardModule, MatToolbarModule, CoursesComponent, MatProgressSpinnerModule, CommonModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export default class CoursesComponent {

  courses$: Observable<Course[]>;
  displayedColumns = ['name', 'categoria'];

  constructor (private coursesService: CoursesService) {
    this.courses$ = this.coursesService.list();
   }
}
