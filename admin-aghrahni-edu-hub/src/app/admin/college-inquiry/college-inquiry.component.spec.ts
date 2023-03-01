import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeInquiryComponent } from './college-inquiry.component';

describe('CollegeInquiryComponent', () => {
  let component: CollegeInquiryComponent;
  let fixture: ComponentFixture<CollegeInquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollegeInquiryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollegeInquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
