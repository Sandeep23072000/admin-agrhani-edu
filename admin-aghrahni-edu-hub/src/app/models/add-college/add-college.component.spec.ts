import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCollegeComponent } from './add-college.component';

describe('AddCollegeComponent', () => {
  let component: AddCollegeComponent;
  let fixture: ComponentFixture<AddCollegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCollegeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCollegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
