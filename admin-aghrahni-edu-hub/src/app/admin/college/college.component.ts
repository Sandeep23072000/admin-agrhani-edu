import { Component, OnInit, AfterViewInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddCollegeComponent } from 'src/app/models/add-college/add-college.component';
import { AuthService } from 'src/app/service/auth.service';
// import { ToastrService } from 'ngx-toastr';

export interface CollegeItem {
  name: string;
  address: string;
  image: string;
  action: string;
}

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.css']
})
export class CollegeComponent implements OnInit {
  baseUrl: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  tableData: CollegeItem[] = [];
  dataSource = new MatTableDataSource<CollegeItem>(this.tableData);
  displayedColumns = ['name', 'address','image', 'action'];
  constructor(private auth: AuthService, private router: Router, private dialog: MatDialog) {
    this.auth.getAPI('/college').subscribe((res) => {
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

  addCollegeDialog() {

    const dialogRef = this.dialog.open(AddCollegeComponent, {
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
        // this.dataSource._updateChangeSubscription();
        // this.toastr.success('Add', 'New college add successfully.');
      }
    })
  }

  deleteCollegeDialog(row: any, i: any) {
    this.auth.deleteAPI('/college/' + row._id).subscribe((res) => {
      console.log(res);
    });
    console.log('delete College');
  }
}
