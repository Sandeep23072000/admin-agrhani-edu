import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-delete-module',
  templateUrl: './delete-module.component.html',
  styleUrls: ['./delete-module.component.css']
})
export class DeleteModuleComponent {
  error:string = '';
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private auth: AuthService, public dialog: MatDialog, public dialogRef: MatDialogRef<DeleteModuleComponent>) {
    console.log(this.data,'delete usererererererererer');
  }

  ngOnInit(): void {
    
  }

  deleteDialog(){
    if (this.data.data?.type === 'college'){
      this.auth.deleteAPI('/college/' + this.data.data?._id).subscribe((res) => {
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
      this.auth.deleteAPI('/course/' + this.data.data?._id).subscribe((res) => {
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

    else if (this.data.data?.type === 'contect') {
      this.auth.deleteAPI('/contect/' + this.data.data?._id).subscribe((res) => {
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
    else if (this.data.data?.type === 'gallery') {
      this.auth.deleteAPI('/gallery/' + this.data.data?._id).subscribe((res) => {
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
    else if (this.data.data?.type === 'banner') {
      this.auth.deleteAPI('/banner/' + this.data.data?._id).subscribe((res) => {
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
    else if (this.data.data?.type === 'review') {
      this.auth.deleteAPI('/review/' + this.data.data?._id).subscribe((res) => {
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
     
     
    // else if (this.data?.type === 'hospital') {
    //   let status;
    //   if (this.data?.str === 'Active') {
    //     status = true;
    //   } else {
    //     status = false;
    //   }
    //   this.auth.patchAPI('hospital/update-hospital/' + this.data?.user?._id, { 'isActive': status }).subscribe((res) => {
    //     if (res.success) {
    //       this.error = '';
    //       this.dialogRef.close(res);
    //     }
    //   }, (err) => {
    //     if (!err.error.success) {
    //       this.error = err.error.msg;
    //     }
    //   })
    // } 
    // else if (this.data?.type === 'department') {
    //   this.auth.patchAPI('hospital/update-department/' + this.data?.user?._id, { 'isActive': this.data?.str }).subscribe((res) => {
    //     if (res.success) {
    //       this.error = '';
    //       this.dialogRef.close(res);
    //     }
    //   }, (err) => {
    //     if (!err.error.success) {
    //       this.error = err.error.msg;
    //     }
    //   })
    // } 
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
