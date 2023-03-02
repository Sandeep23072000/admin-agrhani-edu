import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseInquiryComponent } from './course-inquiry.component';

describe('CourseInquiryComponent', () => {
  let component: CourseInquiryComponent;
  let fixture: ComponentFixture<CourseInquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseInquiryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
