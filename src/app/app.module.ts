import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {AspnetModule} from './modules/custom-ui-module/CustomUiModules';
import {RouterModule} from '@angular/router';
import {baseRoutes} from './modules/routes/BaseRoute';
import {BaseRouteModule} from './modules/routes/BaseRouteModule';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [

    BrowserModule,
    BrowserAnimationsModule,
    AspnetModule,BaseRouteModule,
    RouterModule.forRoot(baseRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents : []
})
export class AppModule { }
