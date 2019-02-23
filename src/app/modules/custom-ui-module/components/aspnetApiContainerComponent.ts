import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'aspnet-api-container-component',
  template: `
    <div class="container">
      <p class="lead">Asp.Net Api demo</p>
      <div class="row">
        <div class="col-5">
          <aspnet-api-http-get></aspnet-api-http-get>
        </div>
        <div class="col-5">
          <aspnet-api-http-post></aspnet-api-http-post>
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
