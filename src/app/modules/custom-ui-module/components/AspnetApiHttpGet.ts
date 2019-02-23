import {Component, OnInit} from '@angular/core';
import {AspnetApiService} from '../services/AspnetApiService';

@Component({
  selector: 'aspnet-api-http-get',
  template: `
    <div class="bg-info">
      <p class="p-2">Http Get</p>
      <button (click)="getProducts()" class="btn btn-primary">Get Products</button>
      
    </div>
  `
})

export class AspnetApiHttpGetComponent implements OnInit {
  constructor(private aspService : AspnetApiService) {
  }

  ngOnInit() {
  }

  getProducts() {
    this.aspService.getProducts()
      .subscribe((x) => {
        console.log(x);
      }, (err)=>{
        console.log(err);
        console.error(err.message);
      }, () =>{
        alert("Done Calling Api");
      });
  }
}
