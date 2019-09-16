import {Component, Inject, OnInit} from '@angular/core';
import {CustomerDetailComponent} from "../customer-detail/customer-detail.component";
import {MatDialogRef,MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  templateUrl: './customer-details-dialog.component.html',
  styleUrls: ['./customer-details-dialog.component.css']
})
export class CustomerDetailsDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<CustomerDetailsDialogComponent>, @Inject(MAT_DIALOG_DATA) public data : any) {
  }

  ngOnInit() {
    this.dialogRef.afterClosed().subscribe(x => console.log(x));
     // this.dialogRef;
  }

  closeDialog() {
    this.dialogRef.close({
      data: {
        message: "Dialog Closed by User",
        data : this.data
      }
    });
  }

}
