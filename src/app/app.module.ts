import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppComponent} from "./app.component";
import {AspnetModule} from "./modules/custom-ui-module/CustomUiModules";
import {BaseRouteModule} from "./modules/routes/BaseRouteModule";

import {Store, StoreModule} from "@ngrx/store";
/*
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {DefaultHttpInterceptor} from "./modules/DefaultHttpInterceptor";
*/


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [

    BrowserModule,
    BrowserAnimationsModule,
    AspnetModule, BaseRouteModule,
    StoreModule.forRoot( {})
  ],
  providers: [

  ],
  bootstrap: [AppComponent],
  entryComponents : []
})
export class AppModule { }
