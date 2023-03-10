import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent {
  is_submit: boolean = false;
  error: string = '';
  selectedImage: any = false;
  addReviewForm = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    image: ['', [Validators.required]]
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private auth: AuthService, private fb: FormBuilder, public dialog: MatDialog, public dialogRef: MatDialogRef<AddReviewComponent>) {
    console.log(data, 'college dialooggggg');
    if (data?.Image) {
      this.updateCollege(data?.Image);
    }
  }

  ngOnInit(): void {

  }

  get uc() { return this.addReviewForm.controls; };
  updateCollege(data: any) {
    // this.uc['name'].setValue(data?.name);
    // this.uc['address'].setValue(data?.address);
    // this.uc['image'].setValue(data?.image);
  }

  onFileSelected(event: any) {
    const file: any = event.target.files[0];
    if (file) {
      this.selectedImage = file;
      console.log(file);
    }
  }

  addReviewFormSubmit() {
    this.is_submit = true;
    console.log(this.addReviewForm.value);
    // if (this.addImageForm.invalid) {
    //   return
    // }
    const formData: any = new FormData();
    formData.append("description", this.addReviewForm.value?.description);
    formData.append("title", this.addReviewForm.value?.title);
    // formData.append("image", this.addImageForm.value?.image);

    formData.append("image", this.selectedImage, this.selectedImage.name);
    console.log(formData, " formData");
    if (!this.data?.update) {
      this.auth.postMultiPartAPI('/review/add', formData).subscribe((res) => {
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
