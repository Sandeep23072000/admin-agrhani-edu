import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { BannerComponent } from './banner/banner.component';
import { CollegeInquiryComponent } from './college-inquiry/college-inquiry.component';
import { CollegeComponent } from './college/college.component';
import { ContactInquiryComponent } from './contact-inquiry/contact-inquiry.component';
import { CourseInquiryComponent } from './course-inquiry/course-inquiry.component';
import { CourseComponent } from './course/course.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [{
  path: '', component  : AdminComponent,
  children:[
  { path: 'college', component: CollegeComponent},
  { path: 'course', component: CourseComponent},
  { path: 'banner', component: BannerComponent},
  { path: 'review', component: ReviewComponent},
  { path: 'image-gallery', component: ImageGalleryComponent},
  { path: 'college-inquiry', component:CollegeInquiryComponent},
  { path: 'contact-inquiry', component: ContactInquiryComponent},
  { path: 'course-inquiry', component: CourseInquiryComponent}
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
