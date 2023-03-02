import { Component, OnInit, AfterViewInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { InquiryComponent } from 'src/app/models/inquiry/inquiry.component';
import { DeleteInquiryComponent } from 'src/app/models/delete-inquiry/delete-inquiry.component';
// import { ToastrService } from 'ngx-toastr';

export interface CollegeItem {
  name: string;
  mobileno: string;
  email: string;
  action: string;
}

@Component({
  selector: 'app-course-inquiry',
  templateUrl: './course-inquiry.component.html',
  styleUrls: ['./course-inquiry.component.css']
})
export class CourseInquiryComponent {
  baseUrl: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  tableData: CollegeItem[] = [];
  dataSource = new MatTableDataSource<CollegeItem>(this.tableData);
  displayedColumns = ['name','mobileno','email','action'];
  constructor(private auth: AuthService, private router: Router, private dialog: MatDialog) {
    this.auth.getAPI('/enquiry/?type=course').subscribe((res) => {
      console.log(res, 'api college responseeeeee');
      if (res.success) {
        this.dataSource.data = res.data;
      }
    });
    this.baseUrl = auth.baseUrl
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  CollegeInquiryViewDialog(data: any, index: number): void {

    const dialogRef = this.dialog.open(InquiryComponent, {
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
        this.dataSource._updateChangeSubscription();
        // this.toastr.success('Add', 'New college add successfully.');
      }
    })
  }

  // deleteCollegeDialog(row: any, i: any) {
  //   this.auth.deleteAPI('/college/' + row._id).subscribe((res) => {
  //     console.log(res);
  //   });
  //   console.log('delete College');
  // }
  deleteCourseDialog(data: any, i: any) {
    const dialogRef = this.dialog.open(DeleteInquiryComponent, {
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
    })
}
}
