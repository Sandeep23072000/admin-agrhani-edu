import { Component, OnInit, AfterViewInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { AddImageGalleryComponent } from 'src/app/models/add-image-gallery/add-image-gallery.component';
import { DeleteModuleComponent } from 'src/app/models/delete-module/delete-module.component';


export interface CollegeItem {
  image: string;
  action: string;
}

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent {
  baseUrl: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  tableData: CollegeItem[] = [];
  dataSource = new MatTableDataSource<CollegeItem>(this.tableData);
  displayedColumns = ['image', 'action'];
  constructor(private auth: AuthService, private router: Router, private dialog: MatDialog) {
    this.baseUrl = auth.baseUrl;
    this.GalleryData();
  }

  ngOnInit(): void {
  }
  GalleryData() {
    this.auth.getAPI('/gallery').subscribe((res) => {
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

  addImageDialog() {

    const dialogRef = this.dialog.open(AddImageGalleryComponent, {
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

  // deleteImageDialog(row: any, i: any) {
  //   this.auth.deleteAPI('/gallery/' + row._id).subscribe((res) => {
  //     console.log(res);
  //     if (res?.success) {
  //       this.dataSource.data.unshift(res?.data);
  //       this.dataSource._updateChangeSubscription();
  //     }
  //   });
  //   console.log('delete College');
  // }

  deleteImageDialog(data: any, i: any) {
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
      this.GalleryData();
    })
  }

}
