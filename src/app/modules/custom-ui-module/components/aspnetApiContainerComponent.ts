import {Component, OnInit} from "@angular/core";

@Component({
  selector: "ssb-aspnet-api-container-component",
  template: `
    <div class="container">
      <p class="lead">Asp.Net Api demo</p>
      <div class="row">
        <div class="col-5">
          <ssb-api-http-get></ssb-api-http-get>
        </div>
        <div class="col-5">
          <ssb-api-http-post></ssb-api-http-post>
        </div>
      </div>
    </div>
  `
})

export class AspnetApiContainerComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
