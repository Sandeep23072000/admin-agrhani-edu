import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { CollegeComponent } from './college/college.component';
import { CourseComponent } from './course/course.component';
import { BannerComponent } from './banner/banner.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { ReviewComponent } from './review/review.component';
import { CollegeInquiryComponent } from './college-inquiry/college-inquiry.component';
import { ContactInquiryComponent } from './contact-inquiry/contact-inquiry.component';
import { CourseInquiryComponent } from './course-inquiry/course-inquiry.component';
import { NewsComponent } from './news/news.component';


@NgModule({
  declarations: [
    AdminComponent,
    CollegeComponent,
    CourseComponent,
    BannerComponent,
    ImageGalleryComponent,
    ReviewComponent,
    CollegeInquiryComponent,
    ContactInquiryComponent,
    CourseInquiryComponent,
    NewsComponent
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
