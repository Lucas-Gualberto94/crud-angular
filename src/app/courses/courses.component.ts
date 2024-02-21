import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Course } from './model/course';
import { CoursesService } from './services/courses.service';
import { Observable, catchError, of } from 'rxjs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from '../components/error-dialog/error-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { CategoryPipe } from '../pipes/category.pipe';


@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    CoursesComponent,
    MatProgressSpinnerModule,
    CommonModule,
    ErrorDialogComponent,
    MatIconModule,
    CategoryPipe
  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export default class CoursesComponent {

  courses$: Observable<Course[]>;
  displayedColumns = ['name', 'categoria'];

  constructor (
    private coursesService: CoursesService,
    public dialog: MatDialog
  ) {
    this.courses$ = this.coursesService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar cursos.');
        return of([])
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }
}
