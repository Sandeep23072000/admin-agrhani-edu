import { Component, OnInit, AfterViewInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddCollegeComponent } from 'src/app/models/add-college/add-college.component';
import { AuthService } from 'src/app/service/auth.service';
import { ViewContactComponent } from 'src/app/models/view-contact/view-contact.component';
import { DeleteModuleComponent } from 'src/app/models/delete-module/delete-module.component';

export interface CollegeItem {
  name: string;
  phoneno: string;
  email: string;
  action: string;
}

@Component({
  selector: 'app-contact-inquiry',
  templateUrl: './contact-inquiry.component.html',
  styleUrls: ['./contact-inquiry.component.css']
})
export class ContactInquiryComponent {
  baseUrl: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  tableData: CollegeItem[] = [];
  dataSource = new MatTableDataSource<CollegeItem>(this.tableData);
  displayedColumns = ['name', 'phoneno', 'email', 'action'];
  constructor(private auth: AuthService, private router: Router, private dialog: MatDialog) {
    this.baseUrl = auth.baseUrl;
    this.ContactInqData();
  }

  ngOnInit(): void {
  }
  ContactInqData() {
    this.auth.getAPI('/contact/').subscribe((res) => {
      console.log(res, 'api college responseeeeee');
      if (res.success) {
        this.dataSource.data = res.data;
      }
    });
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ContactViewDialog(data: any, index: number): void {

    const dialogRef = this.dialog.open(ViewContactComponent, {
      width: '35%',
      data: {
        data: data,
        update: false,
        str: 'Add'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result, 'add college dialog yesss');
      if (result?.success) {
        this.dataSource.data.unshift(result?.data);
        // this.dataSource._updateChangeSubscription();
        // this.toastr.success('Add', 'New college add successfully.');
      }
    })
  }

  // deleteContactDialog(row: any, i: any) {
  //   this.auth.deleteAPI('/contact/' + row._id).subscribe((res) => {
  //     console.log(res);
  //   });
  //   console.log('delete College');
  // }
  deleteContactDialog(data: any, i: any) {
    const dialogRef = this.dialog.open(DeleteModuleComponent, {
      width: '20%',
      data: {
        data: data,
        update: false,
        str: 'Add'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result, 'add college dialog yesss');
      if (result?.success) {
        this.dataSource.data.unshift(result?.data);
        this.dataSource._updateChangeSubscription();
        // this.toastr.success('Add', 'New college add successfully.');
      }
      this.ContactInqData();
    })
  }
}
