import {Component, OnInit} from "@angular/core";
import {AspnetApiService} from "../services/AspnetApiService";

@Component({
  selector: "ssb-api-http-get",
  template: `
    <div class=" p-5">
      <p class="p-2">Http Get</p>
      <button (click)="getProducts()" class="btn btn-primary">Get Products</button>

      <div class="well">
        <pre *ngIf="data">
          {{data | json }}
        </pre>
      </div>
    </div>
  `
})

export class AspnetApiHttpGetComponent implements OnInit {
  data: any ;
  constructor(private aspService: AspnetApiService) {
  }

  ngOnInit() {
  }

  getProducts() {

      this.aspService.getCustomers()
      .subscribe((x) => {
        this.data  = x;
        console.log(x);
      }, (err) => {
        console.log(err);
        console.error(err.message);
      }, () => {
       // alert("Done Calling Api");
      });
  }
}
