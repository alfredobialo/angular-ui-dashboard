import {NgModule} from "@angular/core";
import {HomePageComponent} from "./pages/front-pages/HomePageComponent";
import {AboutPageComponent, NairaPipe} from "./pages/front-pages/AboutPageComponent";
import {SsbSharedModule} from "../shared_modules/SharedModules";
// import {AuthModule} from "../feature-modules/AuthFeatures/AuthModule";
import {ErrorPage404Component} from "./pages/front-pages/ErrorPage404Component";
import {RouterModule} from "@angular/router";
import {baseRoutes} from "./BaseRoute";
import {RouterPageProgressComponent} from "./RouterPageProgressComponent";
import {APP_BASE_HREF, HashLocationStrategy, LocationStrategy, PathLocationStrategy} from "@angular/common";
import {MainMenusComponent} from "./MainMenusComponent";


@NgModule({
  imports: [SsbSharedModule, RouterModule.forRoot(baseRoutes)],
  exports: [RouterModule, RouterPageProgressComponent, MainMenusComponent],
  declarations: [HomePageComponent, RouterPageProgressComponent, AboutPageComponent, NairaPipe, ErrorPage404Component, MainMenusComponent],
  providers: [
   /* {provide : APP_BASE_HREF , useValue : "/"},*/
    {provide : LocationStrategy, useClass : PathLocationStrategy /*HashLocationStrategy*/}
  ],
})
export class BaseRouteModule {
}
