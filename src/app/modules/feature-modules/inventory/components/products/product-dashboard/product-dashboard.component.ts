import { Component, OnInit } from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {InventoryService} from "../../../inventoryService";

@Component({
  selector: "ssb-product-dashboard",
  templateUrl: "./product-dashboard.component.html",
  styleUrls: ["./product-dashboard.component.css"]
})
export class ProductDashboardComponent implements OnInit {

  inventoryList$ : Observable<any>;
  loading: boolean  = false;
  constructor(private activeRoute : ActivatedRoute, private inventoryService : InventoryService) { }

  ngOnInit() {
    // get product data
    console.log(this.activeRoute.data);
    this.inventoryList$  = <Observable<any>> this.activeRoute.data;
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
}

