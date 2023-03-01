import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { imageFormatValidator } from 'src/app/imgvalidator';

@Component({
  selector: 'app-add-banner',
  templateUrl: './add-banner.component.html',
  styleUrls: ['./add-banner.component.css']
})
export class AddBannerComponent implements OnInit  {
  is_submit: boolean = false;
  error: string = '';
  selectedImage: any = false;
  addBannerForm = this.fb.group({
  //   name: ['', Validators.required],
  //   address: ['', Validators.required],
    image: ['', [Validators.required]]
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private auth: AuthService, private fb: FormBuilder, public dialog: MatDialog, public dialogRef: MatDialogRef<AddBannerComponent>) {
    console.log(data, 'college dialooggggg');
    if (data?.banner) {
      this.updateCollege(data?.banner);
    }
  }

  ngOnInit(): void {

  }

  get uc() { return this.addBannerForm.controls; };
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

  addBannerFormSubmit() {
    this.is_submit = true;
    // console.log(this.addBannerForm.value);
    // if (this.addBannerForm.invalid) {
    //   return
    // }
    const formData: any = new FormData();
    // formData.append("name", this.addBannerForm.value?.name);
    // formData.append("address", this.addBannerForm.value?.address);
    // formData.append("image", this.addBannerForm.value?.image);

    formData.append("image", this.selectedImage, this.selectedImage.name);
    console.log(formData, " formData");
    if (!this.data?.update) {
      this.auth.postMultiPartAPI('/banner/add', formData).subscribe((res) => {
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
