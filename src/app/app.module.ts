import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import {MyDialogComponent} from './util-components/MyDialogComponent';
import {ModalTriggerButton} from './util-components/ModalTriggerButton';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FunnyComponent} from './util-components/FunnyComponent';
import {TabsComponent} from './util-components/TabsComponent';
import {SimpleTimerComponent} from './util-components/SimpleTimerComponent';
import {CoreUiModules} from './core-ui-modules/CoreUiModules';
import {NgSelectModule} from "@ng-select/ng-select";
import { ButtonModule } from "primeng/button";
import {TabViewModule} from 'primeng/tabview';
import {FurtherMathModule} from '../further-math/futher-math-module';

@NgModule({
  declarations: [
    AppComponent,
    ModalTriggerButton,
    MyDialogComponent,
    FunnyComponent,
    TabsComponent,
    SimpleTimerComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    BrowserAnimationsModule,
    CoreUiModules,
    NgSelectModule,
    ButtonModule,
    TabViewModule,
    FurtherMathModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents : [MyDialogComponent, FunnyComponent]
})
export class AppModule { }
