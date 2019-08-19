import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DropdownModule, InputSwitchModule, InputTextModule, TabViewModule} from "primeng/primeng";
import {SpinnerComponent} from "./components/spinnerComponent";
import {CoreUiModules} from "../core-ui-modules/CoreUiModules";
import {MatDialogModule} from "@angular/material";

const sharedModules  = [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule,
TabViewModule, InputTextModule, InputSwitchModule, DropdownModule, CoreUiModules, MatDialogModule
] ;
@NgModule({
  imports: [...sharedModules],
  exports: [...sharedModules, SpinnerComponent],
  declarations: [SpinnerComponent],
  providers: [],
})
export class SsbSharedModule {
}
