import {Route} from "@angular/router";
import {CrmDashboardComponent} from "./components/crm.dashboard/crm.dashboard.component";
import {CustomerListComponent} from "./components/cutomer-list/customer-list.component";
import {CustomerDetailComponent} from "./components/customer-detail/customer-detail.component";
import {CrmShellComponent} from "./components/crm-shell/crm-shell.component";

export const CrmRouteConstants: any =
  {
    CUSTOMER_DETAILS: "customer-details",
    CUSTOMER_LIST: "customer-list",
    CRM_DASHBOARD :"dashboard",
    CRM_ROOT :"crm",
    CRM_SHELL :"shell"
  }

export const crmRoutes: Route[] = [
  {
    path: CrmRouteConstants.CRM_SHELL,
    component: CrmShellComponent,
  },
  {
    path: CrmRouteConstants.CRM_DASHBOARD,
    component: CrmDashboardComponent,
  },
  {
    path: CrmRouteConstants.CUSTOMER_DETAILS,
    component: CustomerDetailComponent,
  }

];


