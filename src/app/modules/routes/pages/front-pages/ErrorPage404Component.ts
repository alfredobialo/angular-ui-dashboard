import {Component, OnInit} from "@angular/core";

@Component({
  selector: "ssb-error-404",
  template: `<div class="jumbotron-fluid jumbotron ">
    <div class="d-flex flex-column justify-content-center align-items-center">
      <h1><i class="text-danger fa fa-3x fa-bug"></i> &nbsp; Oops !! Error 404</h1>
      <p class="lead">Page not found</p>
    </div>
  </div>`
})

export class ErrorPage404Component implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
