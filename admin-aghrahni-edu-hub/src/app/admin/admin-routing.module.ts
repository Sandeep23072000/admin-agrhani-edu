import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CollegeComponent } from './college/college.component';
import { CourseComponent } from './course/course.component';

const routes: Routes = [
  { path: 'home', component: AdminComponent },
  { path: 'college', component: CollegeComponent},
  { path: 'course', component: CourseComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
