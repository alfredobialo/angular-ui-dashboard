import { Component, OnInit } from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {InventoryService} from "../../../inventoryService";
import {IPagerSource} from "../../../../../core-ui-modules/ui-components/PagerComponent";

@Component({
  selector: "ssb-product-dashboard",
  templateUrl: "./product-dashboard.component.html",
  styleUrls: ["./product-dashboard.component.css"]
})
export class ProductDashboardComponent implements OnInit {

  inventoryList$ : any;
  loading: boolean  = false;
  productPager: IPagerSource = {currentPage :1 , pageSize : 1, totalPages : 0, totalRecord : 0};
  constructor(private activeRoute : ActivatedRoute, private inventoryService : InventoryService) { }

  ngOnInit() {
    // get product data
    console.log(this.activeRoute.data);
    this.inventoryList$  = this.activeRoute.data;
    this.inventoryList$.subscribe
      (x => {
        console.log("X" ,x);
        this.productPager.totalRecord = x.inventoryDashboardData.length;


      });
  }

  getResource(url: any) {
    this.loading  = true;
    this.inventoryService.executeItemResource(url, "get")
      .subscribe( x => {
        console.log(x);
      },  e => {
        this.loading  = false;
        console.log(e);
      }, () => {
        console.log("Api Call completed!");
        this.loading  = false;
      });
  }

  gotoPage(index: number) {
    this.productPager.currentPage  = index+1;
    // call get resource here
    console.log(`Page Index ${this.productPager.currentPage} Clicked`);
  }
}

