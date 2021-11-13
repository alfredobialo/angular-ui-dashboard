import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DropdownModule, InputSwitchModule, InputTextModule, TabViewModule} from "primeng/primeng";
import {SpinnerComponent} from "./components/spinnerComponent";
import {CoreUiModules} from "../core-ui-modules/CoreUiModules";
import {MatDialogModule} from "@angular/material";
import {DefaultHttpInterceptor} from "../DefaultHttpInterceptor";
import {AlertService} from "./AlertService";

const sharedModules  = [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule,
TabViewModule, InputTextModule, InputSwitchModule, DropdownModule, CoreUiModules, MatDialogModule
] ;
@NgModule({
  imports: [...sharedModules],
  exports: [...sharedModules, SpinnerComponent],
  declarations: [SpinnerComponent],
  providers: [AlertService, { provide : HTTP_INTERCEPTORS, useClass : DefaultHttpInterceptor , multi : true}],
})
export class SsbSharedModule {
}
