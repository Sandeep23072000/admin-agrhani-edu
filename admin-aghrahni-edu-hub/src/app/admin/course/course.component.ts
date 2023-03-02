import { Component, OnInit, AfterViewInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
// import { ToastrService } from 'ngx-toastr';
import { AddCourseComponent } from 'src/app/models/add-course/add-course.component';
import { DeleteModuleComponent } from 'src/app/models/delete-module/delete-module.component';

export interface CollegeItem {
  name: string;
  action: string;
}

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  tableData: CollegeItem[] = [];
  dataSource = new MatTableDataSource<CollegeItem>(this.tableData);
  displayedColumns = ['name', 'action'];
  constructor(private auth: AuthService, private router: Router, private dialog: MatDialog) {
    this.auth.getAPI('/course').subscribe((res) => {
      console.log(res, 'api college responseeeeee');
      if (res.success) {
        this.dataSource.data = res.data;
      }
    });
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  addCourseDialog() {

    const dialogRef = this.dialog.open(AddCourseComponent, {
      width: '35%',
      data: {
        update: false,
        str: 'Add'
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result, 'add college dialog yesss');
      if (result?.success) {
        this.dataSource.data.unshift(result?.data);
        this.dataSource._updateChangeSubscription();
        // this.toastr.success('Add', 'New course add successfully.');
      }
    })
  }

  // deleteCourseDialog(row: any, i: any) {
  //   this.auth.deleteAPI('/course/' + row._id).subscribe((res) => {
  //     console.log(res);
  //     if (res?.success) {
  //       this.dataSource.data.unshift(res?.data);
  //       this.dataSource._updateChangeSubscription();
  //     }
  //   });

  //   console.log('delete College');
  // }

  deleteCourseDialog(data: any, i: any) {
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
    })
}

}
