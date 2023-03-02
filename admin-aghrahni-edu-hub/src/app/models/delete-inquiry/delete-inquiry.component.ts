import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-delete-inquiry',
  templateUrl: './delete-inquiry.component.html',
  styleUrls: ['./delete-inquiry.component.css']
})
export class DeleteInquiryComponent implements OnInit  {
  error:string = '';
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private auth: AuthService, public dialog: MatDialog, public dialogRef: MatDialogRef<DeleteInquiryComponent>) {
    console.log(this.data,'delete usererererererererer');
  }
  ngOnInit(): void {}

  deleteDialog(){
    if (this.data.data?.type === 'college'){
      this.auth.deleteAPI('/enquiry/' + this.data.data?._id).subscribe((res) => {
        // if (res?.success) {
        //   this.error = '';
          this.dialogRef.close(res);
      //   }
      // }, (err) => {
      //   if (!err.error?.success) {
      //     this.error = err.error.msg;
        // }
      })
    } 
    else if (this.data.data?.type === 'course'){
      this.auth.deleteAPI('/enquiry/' + this.data.data?._id).subscribe((res) => {
        // if (res.success) {
        //   this.error = '';
          this.dialogRef.close(res);
        // }
      // }, (err) => {
      //   if (!err.error.success) {
      //     this.error = err.error.msg;
      //   }
      })
    } 
}
closeDialog() {
  this.dialogRef.close();
}

}