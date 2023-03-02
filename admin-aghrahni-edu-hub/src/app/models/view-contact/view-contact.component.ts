import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit  {
  details: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private auth: AuthService, public dialog: MatDialog, public dialogRef: MatDialogRef<ViewContactComponent>){
    console.log(this.data);
    this.details = data.data;
    console.log(this.details);
  }

  ngOnInit(): void {
    
  }
  closeDialog(){
    this.dialogRef.close(false);
  }
}
