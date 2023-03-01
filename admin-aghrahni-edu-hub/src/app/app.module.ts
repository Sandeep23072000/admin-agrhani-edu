import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ToastrModule } from 'ngx-toastr';

import { AddCollegeComponent } from './models/add-college/add-college.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddCourseComponent } from './models/add-course/add-course.component';
import { AddBannerComponent } from './models/add-banner/add-banner.component';
import { AddImageGalleryComponent } from './models/add-image-gallery/add-image-gallery.component';
import { AddReviewComponent } from './models/add-review/add-review.component';
import { InquiryComponent } from './models/inquiry/inquiry.component';

@NgModule({
  declarations: [
    AppComponent,
    AddCollegeComponent,
    AddCourseComponent,
    AddBannerComponent,
    AddImageGalleryComponent,
    AddReviewComponent,
    InquiryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatExpansionModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatGridListModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,
    ToastrModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
