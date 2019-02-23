import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from '@angular/router';

@Component({
  selector: 'caas-about-page',
  template: `
    <div>
      <h1>About us</h1>
      <p>This the best place to be if you really want to build an amazing Payment Platform</p>
    </div>`
})

export class AboutPageComponent implements OnInit {
  constructor(private router : Router, private activatedRouteSnapshot: ActivatedRouteSnapshot,
              private activatedRoute : ActivatedRoute) {
  }

  ngOnInit()
  {

    const params   = this.activatedRoute.params;
    const paramsmap  = this.activatedRoute.paramMap;
    const queryParamMap  = this.activatedRoute.queryParamMap;
    const queryParam  = this.activatedRoute.queryParams;

    console.log(params,paramsmap,queryParam, queryParamMap);

  }
}
