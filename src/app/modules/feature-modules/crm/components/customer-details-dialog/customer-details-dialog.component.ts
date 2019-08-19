import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material";
import {CustomerDetailComponent} from "../customer-detail/customer-detail.component";

@Component({
  selector: 'ssb-customer-details-dialog',
  templateUrl: './customer-details-dialog.component.html',
  styleUrls: ['./customer-details-dialog.component.css']
})
export class CustomerDetailsDialogComponent implements OnInit {

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
    /*this.dialog.open(CustomerDetailComponent, {
      data: {
        customerInfo: {
          firstName: "Alfred",
          lastName: "Obialo"
        }
      },
    });*/
  }

}
