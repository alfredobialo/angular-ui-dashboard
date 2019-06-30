import { NgModule } from "@angular/core";
import { CreateProductComponent } from "./components/products/create-product/create-product.component";
import { ProductListComponent } from "./components/products/product-list/product-list.component";
import { EditProductDialogComponent } from "./components/products/edit-product-dialog/edit-product-dialog.component";
import {SsbSharedModule} from "../../shared_modules/SharedModules";
import { ProductDashboardComponent } from "./components/products/product-dashboard/product-dashboard.component";
import {inventoryRouteDefinition} from "./inventoryRoutes";
import {RouterModule} from "@angular/router";
import {InventoryDashboardResolver, InventoryService} from "./inventoryService";

@NgModule({
  declarations: [CreateProductComponent, ProductListComponent, EditProductDialogComponent, ProductDashboardComponent],
  imports: [
    SsbSharedModule,
    RouterModule.forChild(inventoryRouteDefinition)
  ],
  providers : [InventoryService, InventoryDashboardResolver],
  exports: []
})
export class InventoryModule { }


