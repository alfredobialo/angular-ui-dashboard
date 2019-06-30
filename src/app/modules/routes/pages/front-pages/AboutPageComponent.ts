import {Component, OnInit, PipeTransform, Pipe} from "@angular/core";
import {ActivatedRoute, ActivatedRouteSnapshot, Router} from "@angular/router";
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: "ssb-about-page",
  template: `
    <div>
      <h1>About us</h1>
      <p>This the best place to be if you really want to build an amazing Payment Platform</p>
        <div *ngIf="fromHomePage">
          <hr>
      <p class="lead">From Home Page</p>
      <p *ngFor="let d of fromHomePage | keyvalue">
        {{d.key}} <br>
        {{d.value}}

      </p>
          <p class="lead">Upper case example : {{'this text will be transformed to uppercase letters' |uppercase}}</p>
    </div>

     <!-- <div class="d-flex flex-row justify-content-between align-items-center">
          <div *ngFor="let l of [1,2,3]">
             <ssb-login [idSuffix]="l"></ssb-login>
          </div>
      </div>-->

    </div>
  `

})

export class AboutPageComponent implements OnInit {

  fromHomePage: any  = {};
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {

    const params   = this.activatedRoute.params.subscribe(
      x => {
        console.log(x);
        this.fromHomePage  = x;
      }
    );


    console.log(params);

  }
}


  @Pipe(
  {
    name : "naira",
    pure: true

  })
export class NairaPipe extends CurrencyPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
   const result  = super.transform(value, "NGN", "code");
   console.log(result);
    return  result  ; // `=N= ${value}`;
  }

}
