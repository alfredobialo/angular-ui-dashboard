import {Component, OnInit, OnDestroy} from "@angular/core";
import {Meta, Title} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {interval, Observable, range} from "rxjs";
import {createObservableOfSomething} from "../../../rxjs-utils/ObjectTypes";
import {buffer, bufferCount, bufferToggle, bufferWhen, bufferTime, window, windowTime} from "rxjs/operators";

@Component({
  selector: "ssb-home-page",
  template: `
    <div>
      <div class="jumbotron">
      <div class="d-flex flex-column justify-content-center align-items-center">
        <div class="align-content-end">
            <h1>Home Page!</h1>
            <p class="lead">Welcome back!</p>

         <!-- <ssb-login (onLoginSuccess)="currentUser= $event"></ssb-login>-->
        </div>
        {{currentUser | json}}
      </div>
      </div>
    </div>`
})

export class HomePageComponent implements OnInit, OnDestroy {

  defPageTitle: string;
  amount = 450000;
  currentUser: any;

  constructor(private title: Title, private meta: Meta, private activatedRoute: ActivatedRoute, private route: Router) {
  }

  ngOnInit() {
    // store default page title
    // Call The Effectiv Sales Order Module
    /*let salesOrder =  SalesOrder;
    let result=  salesOrder.getSalesReport({query:"recent sales", pageSize :10});
    console.log(result);*/
  }

  ngOnDestroy(): void {

  }


}


