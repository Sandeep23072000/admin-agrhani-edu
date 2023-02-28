import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { CollegeComponent } from './college/college.component';
import { CourseComponent } from './course/course.component';


@NgModule({
  declarations: [
    AdminComponent,
    CollegeComponent,
    CourseComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule
  ]
})
export class AdminModule { }
