import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CustomerService} from "../../services/customer.service";


@Component({
  selector: 'ssb-customer-detail',
  template: `
    <ng-content></ng-content>
    <div class="p-5">
      <h1>Customer Details</h1>
      <pre class="p-5 lead " style="font-family: 'Lucida Console'">
        {{data | json}}
      </pre>
    </div>
    <div class="mt-2 p-3">
      <div class="row">
        <div class="col-12 col-sm-3">
          <p class="lead">Hello Sam</p>

        </div>
        <div class="col-12 col-sm-9">
        <p class="lead text-primary">Change your browser viewport size</p>
      </div>
      </div>
    </div>

  `,
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  data = null;

  constructor(private activatedRoute: ActivatedRoute,
              private customerService: CustomerService,
              ) {
  }

  ngOnInit() {


    // we need to get the full Resource data for the selected customer
    // since this is a restful service
    this.activatedRoute.queryParams.subscribe(x => {
      this.data = x;
      console.log(x);
      this.customerService.executeResource(x.href,"get")
        .subscribe(y => this.data = y.data);
    });
  }

}
