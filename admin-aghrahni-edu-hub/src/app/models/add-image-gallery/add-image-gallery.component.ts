import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { imageFormatValidator } from 'src/app/imgvalidator';

@Component({
  selector: 'app-add-image-gallery',
  templateUrl: './add-image-gallery.component.html',
  styleUrls: ['./add-image-gallery.component.css']
})
export class AddImageGalleryComponent {
  is_submit: boolean = false;
  error: string = '';
  selectedImage: any = false;
  addImageForm = this.fb.group({
  //   name: ['', Validators.required],
  //   address: ['', Validators.required],
    // image: ['', [Validators.required, imageFormatValidator]]
  });

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private auth: AuthService, private fb: FormBuilder, public dialog: MatDialog, public dialogRef: MatDialogRef<AddImageGalleryComponent>) {
    console.log(data, 'college dialooggggg');
    if (data?.Image) {
      this.updateCollege(data?.Image);
    }
  }

  ngOnInit(): void {

  }

  get uc() { return this.addImageForm.controls; };
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

  addImageFormSubmit() {
    this.is_submit = true;
    // console.log(this.addImageForm.value);
    // if (this.addImageForm.invalid) {
    //   return
    // }
    const formData: any = new FormData();
    // formData.append("name", this.addImageForm.value?.name);
    // formData.append("address", this.addImageForm.value?.address);
    // formData.append("image", this.addImageForm.value?.image);

    formData.append("image", this.selectedImage, this.selectedImage.name);
    console.log(formData, " formData");
    if (!this.data?.update) {
      this.auth.postMultiPartAPI('/gallery/add', formData).subscribe((res) => {
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
