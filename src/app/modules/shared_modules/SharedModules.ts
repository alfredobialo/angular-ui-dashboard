import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {DropdownModule, InputSwitchModule, InputTextModule, DialogModule} from "primeng/primeng";
import {SpinnerComponent} from "./components/spinnerComponent";
import {CoreUiModules} from "../core-ui-modules/CoreUiModules";


const sharedModules  = [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule,
DialogModule, InputTextModule, InputSwitchModule, DropdownModule, CoreUiModules
] ;
@NgModule({
  imports: [...sharedModules],
  exports: [...sharedModules, SpinnerComponent],
  declarations: [SpinnerComponent],
  providers: [],
})
export class SsbSharedModule {
}
