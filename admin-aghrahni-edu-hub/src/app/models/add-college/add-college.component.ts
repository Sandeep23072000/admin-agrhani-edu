import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { imageFormatValidator } from 'src/app/imgvalidator';

@Component({
  selector: 'app-add-college',
  templateUrl: './add-college.component.html',
  styleUrls: ['./add-college.component.css']
})
export class AddCollegeComponent implements OnInit {

  is_submit: boolean = false;
  error: string = '';
  selectedImage: any = false;
  addCollegeForm = this.fb.group({
    name: ['', Validators.required],
    address: ['', Validators.required],
    image: ['', [Validators.required]],
    website: ['', [Validators.required]],
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private auth: AuthService, private fb: FormBuilder, public dialog: MatDialog, public dialogRef: MatDialogRef<AddCollegeComponent>) {
    console.log(data, 'college dialooggggg');
    if (data?.college) {
      // this.updateCollege(data?.college);
    }
  }

  ngOnInit(): void {

  }

  get uc() { return this.addCollegeForm.controls; };
  // updateCollege(data: any) {
  //   this.uc['name'].setValue(data?.name);
  //   this.uc['address'].setValue(data?.address);
    // this.uc['image'].setValue(data?.image);
  // }

  onFileSelected(event: any) {
    const file: any = event.target.files[0];
    if (file) {
      this.selectedImage = file;
      console.log(file);
    }
  }

  addCollegeFormSubmit() {
    this.is_submit = true;
    console.log(this.addCollegeForm.value);
    if (this.addCollegeForm.invalid) {
      return
    }
    const formData: any = new FormData();
    formData.append("name", this.addCollegeForm.value?.name);
    formData.append("address", this.addCollegeForm.value?.address);
    formData.append("website", this.addCollegeForm.value?.website);

    formData.append("image", this.selectedImage, this.selectedImage.name);
    console.log(formData, " formData");
    if (!this.data?.update) {
      this.auth.postMultiPartAPI('/college/add', formData).subscribe((res) => {
        console.log(res);

        if (res.success) {
          this.error = '';
          this.dialogRef.close(res);
        }
      }, (err) => {
        if (!err.error.success) {
          this.error = err.error.msg;
        }
      })

    //   this.auth.patchAPI('/college' + this.data?._id, formData).subscribe((res) => {
    //     if (res.success) {
    //       this.error = '';
    //       this.dialogRef.close(res);
    //     }
    //   }, (err) => {
    //     if (!err.error.success) {
    //       this.error = err.error.msg;
    //     }
    //   })
     }
  }

  closeDialog() {
    this.dialogRef.close('res');
  }
}
