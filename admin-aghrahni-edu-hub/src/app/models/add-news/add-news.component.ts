import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { AddCollegeComponent } from '../add-college/add-college.component';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent {
  is_submit: boolean = false;
  error: string = '';
  addCourseForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private auth: AuthService, private fb: FormBuilder, public dialog: MatDialog, public dialogRef: MatDialogRef<AddCollegeComponent>) {
    console.log(data, 'course dialooggggg');
    // if (data?.course) {
      // this.updateCollege(data?.course);
    // }
  }

  ngOnInit(): void {

  }

  get uc() { return this.addCourseForm.controls; };
  // updateCollege(data: any) {
  //   this.uc['name'].setValue(data?.name);
  // }

  addCourseFormSubmit() {
    this.is_submit = true;
    console.log(this.addCourseForm.value);
    // if (this.addCourseForm.invalid) {
    //   return
    // }
    // const formData: any = new FormData();
    // formData.append("name", this.addCourseForm.value?.name);
    // console.log(formData, " formData");
    // if (!this.data?.update) {
      this.auth.postAPI('/news/add', this.addCourseForm.value).subscribe((res) => {
        console.log(res);

        if (res?.success) {
          this.error = '';
          this.dialogRef.close(res);
        }
      }, (err) => {
        if (!err.error?.success) {
          this.error = err.error?.msg;
        }
    })
  
  }

    //   this.auth.patchAPI('/course' + this.data?._id, formData).subscribe((res) => {
    //     if (res.success) {
    //       this.error = '';
    //       this.dialogRef.close(res);
    //     }
    //   }, (err) => {
    //     if (!err.error.success) {
    //       this.error = err.error.msg;
    //     }
    //   })
    //  }
  // }

  closeDialog() {
    this.dialogRef.close('res');
  }
}
