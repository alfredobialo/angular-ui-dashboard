import { Route } from "@angular/router";
import {
  ProductDashboardComponent
} from "./components/products/product-dashboard/product-dashboard.component";
import {InventoryDashboardResolver} from './inventoryDashboardResolver'
import {CreateProductComponent} from "./components/products/create-product/create-product.component";
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
  },
  {
    path : "add-product",
    component : CreateProductComponent,
    data : {
      meta :{
        pageTitle: "Create New Inventory Item",
        pageDescription: "Create Product item and add them to inventory"
      }
    }
  }
];


