import { NgModule } from '@angular/core';
import { CustomerListComponent } from './components/cutomer-list/customer-list.component';
import { CrmDashboardComponent} from './components/crm.dashboard/crm.dashboard.component';
import {SsbSharedModule} from "../../shared_modules/SharedModules";
import {RouterModule} from "@angular/router";
import {crmRoutes} from "./crm.routes";
import {CustomerService} from "./services/customer.service";
import { CustomerDetailComponent } from './components/customer-detail/customer-detail.component';
import { CustomerDetailsDialogComponent } from './components/customer-details-dialog/customer-details-dialog.component';
import { CrmNavComponent } from './components/crm-nav/crm-nav.component';
import { CrmShellComponent } from './components/crm-shell/crm-shell.component';

@NgModule({
  declarations: [CustomerListComponent, CrmDashboardComponent, CustomerDetailComponent, CustomerDetailsDialogComponent, CrmNavComponent, CrmShellComponent],
  imports: [
    SsbSharedModule,
    RouterModule.forChild(crmRoutes)
  ],
  providers: [CustomerService]

})
export class CrmModule { }
