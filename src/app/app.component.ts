import {Component, VERSION, OnInit, OnDestroy, EventEmitter, Output} from "@angular/core";
import {Title, Meta} from "@angular/platform-browser";
import {ActivationStart, NavigationCancel, NavigationEnd, NavigationStart, Router} from "@angular/router";
import {filter, map} from "rxjs/operators";

@Component({
  selector: "ssb-app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit, OnDestroy {
  appVersion = VERSION.full;
  loadingRoutedPage = false;
  title = `Custom UI/UX Component Design Angular ${this.appVersion}`;

  constructor(private pgTitle: Title, private meta: Meta,  private router: Router) {
  }

  ngOnInit(): void {
    this.setPagetitleFromRouteEvent(this.router) ;
    this.setRouterProgressStatus(this.router) ;
    this.setRouterEndProgressStatus(this.router) ;
  }

  private setPagetitleFromRouteEvent(router: Router) {
    router.events.pipe(
      filter(x => x instanceof ActivationStart),
      map(x => {
        const activatedRouteData: ActivationStart = <ActivationStart>x;
        return activatedRouteData.snapshot.data;
      })
    ).subscribe(x => {
      if (x.meta) {
        this.pgTitle.setTitle(x.meta.pageTitle);
        this.meta.addTag( { name: "description", content: x.meta.pageDescription});
        //.log(x) ;
      }
    });
  }
  private setRouterProgressStatus(router: Router) {
    router.events.pipe(
      filter(x => x instanceof NavigationStart)
    ).subscribe(x => {
      this.loadingRoutedPage  = true;
      //.log(x, this.loadingRoutedPage) ;
    });
  }
  private setRouterEndProgressStatus(router: Router) {
    router.events.pipe(
      filter(x => x instanceof NavigationEnd || x instanceof NavigationCancel)
    ).subscribe(x => {
      this.loadingRoutedPage  = false;
      //.log(x, this.loadingRoutedPage) ;
    });
  }
  ngOnDestroy(): void {

  }

}
