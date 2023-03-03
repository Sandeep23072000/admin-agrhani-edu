import { Component, OnInit, AfterViewInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddCollegeComponent } from 'src/app/models/add-college/add-college.component';
import { AuthService } from 'src/app/service/auth.service';
import { DeleteModuleComponent } from 'src/app/models/delete-module/delete-module.component';
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
    this.baseUrl = auth.baseUrl
    this.CollegeData();
  }
  
  ngOnInit(): void {
  }
  CollegeData(){
  this.auth.getAPI('/college').subscribe((res) => {
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
        this.dataSource._updateChangeSubscription();
        // this.toastr.success('Add', 'New college add successfully.');
      }
    })
  }

  deleteCollegeDialog(data: any, i: any) {
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
      this.CollegeData();
    })
}
}
