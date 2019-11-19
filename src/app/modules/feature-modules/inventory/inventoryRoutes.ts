import { Route } from "@angular/router";
import {
  ProductDashboardComponent
} from "./components/products/product-dashboard/product-dashboard.component";
import {InventoryDashboardResolver} from './inventoryDashboardResolver'
export const inventoryRouteDefinition  : Route[]  = [
  // inventory dashboard
  {
    path  : "dashboard",
    component : ProductDashboardComponent,
    resolve : { inventoryDashboardData : InventoryDashboardResolver},
    data : {
      meta : {
        pageTitle : "Inventory Dashboard",
        pageDescription : "Inventory Summary, Analysis"
      }
    }
  }
];


