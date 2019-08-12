import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../../services/customer.service";
import { Router} from "@angular/router";
import {CrmRouteConstants} from "../../crm.routes";

@Component({
  selector: 'ssb-customer-list',
  template: `
    <div class="p-2">
      <div class="bg-light">
        <p class="lead">
          Component Dialog <br>
          <ssb-customer-details-dialog>
            <button class="btn btn-lg btn-dark">Open Dialog</button>
          </ssb-customer-details-dialog>
        </p>
      </div>
      <table class=" p-3 table table-hover table-bordered table-light ">
        <tr>
          <th>S/N</th>
          <th>Id</th>
          <th>Name</th>
          <th>Address</th>
          <th></th>
        </tr>
        <tr *ngFor="let c of data; let index = index ;">
          <td>{{index + 1 }}</td>
          <td>{{c.id}}</td>
          <td class="font-weight-bold text-primary">{{c.firstName}}, {{c.lastName}}</td>
          <td>{{c.address}}</td>
          <td><button class="btn btn-primary btn-sm" (click)="showDetails(c)">Details</button></td>
        </tr>
      </table>
    </div>
  `,
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  //customerList$$ : Promise<any>;
  customerResponse: any;
  processing: boolean;
  data: any[];

  constructor(private router : Router, private customerService: CustomerService) {
  }

  ngOnInit() {
    this.processing = true;
    this.customerService.getCustomerList()
      .then(x => {
        this.customerResponse = x;
        if (x.success) {
          this.data = x.data;
        }
        this.processing = false;
      }, rejt => {
        console.log("Promise Rejected!");
        this.processing = false;
      })
      .catch(err => {
        console.log(err);
        this.processing = false;
      });
    ;

  }

  showDetails(c: any) {
    // get the customer Details Url
    const urlInfo  =c.urls.details;
    console.log(urlInfo, c.firstName, c.lastName);
    this.router.navigate([`/${CrmRouteConstants.CRM_ROOT}/${CrmRouteConstants.CUSTOMER_DETAILS}`],{queryParams  : { href :  urlInfo.href } } );
   /* this.customerService.executeResource(urlInfo.href,"get")
      .subscribe(x => {
        console.log(x.data, x);
      });*/
  }
}
