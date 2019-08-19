import { Component, OnInit } from '@angular/core';
import {CustomerService} from "../../services/customer.service";

@Component({
  selector: 'ssb-crm.dashboard',
  template: `
    <div class="bg-light p-5 d-flex flex-column align-items-center justify-content-center">
      <div class="container-fluid">
        <h3 class="my-2">Customer Dashboard</h3>
        <ssb-customer-list></ssb-customer-list>
      </div>
     
      <pre *ngIf="apiRoot"> {{apiRoot | json }}</pre>
      <div class="alert-danger p-3 d-flex flex-column justify-content-center align-items-center shadow" *ngIf="!apiRoot">
        <p class="lead"><i class="fa fa-bug fa-2x"></i> &nbsp; Service not Reachable!</p>
        <button class="btn btn-danger" (click)="reload()"><ssb-spinner *ngIf="processing"></ssb-spinner> <span >Retry</span></button>
      </div>
    </div>
  `,
  styleUrls: ['./crm.dashboard.component.css']
})
export class CrmDashboardComponent implements OnInit {

  apiRoot = null;
  private processing: boolean;
  constructor(private customerService : CustomerService) { }

  ngOnInit() {
    this.reload();
  }

  async reload() {
    this.processing= true;
     this.apiRoot  =await this.customerService.getCustomerList();
     this.processing  =false;
  }
}
