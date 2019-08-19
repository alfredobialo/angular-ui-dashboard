import {Component, OnInit} from '@angular/core';
import {CrmRouteConstants} from "../../crm.routes";

@Component({
  selector: 'ssb-crm-nav',
  template: `
      <div class="p-3">
          <ul class="list-unstyled">
              <li><a [routerLink]="['/crm/dashboard']">Dashboard</a></li>
              <li><a [routerLink]="['/crm/customer-list']">Customer List</a></li>
              <li><a href="">Leads</a></li>
              <li><a href="">Sales</a></li>
          </ul>
      </div>
  `,
  styleUrls: ['./crm-nav.component.css']
})
export class CrmNavComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
