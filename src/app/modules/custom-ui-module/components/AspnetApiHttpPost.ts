import {Component, OnInit} from "@angular/core";

@Component({
  selector: "ssb-api-http-post",
  template: `
    <div>
      <div class="row">
        <div class="col-12">
          <p class="lead p-2">Post new Product Resource</p>
          <input type="text" #input class="form-control form-control-lg" placeholder="Add Product Here">
          <div class="mt-3">
             <button (click)="addProduct(input)" class="btn btn-success">Add Product</button>
          </div>
          <div class="bg-warning">
              <p class="m-3">Result From Post</p>
              <pre>

              </pre>
          </div>

        </div>
      </div>
    </div>
  `
})

export class AspnetApiHttpPostComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

  addProduct(input: HTMLInputElement) {
    console.log(input.value);
  }
}
