import {NgModule} from "@angular/core";
import {FactorialComponent} from './FactorialComponent';
import {CommonModule} from '@angular/common';
@NgModule({
 declarations  : [FactorialComponent],
  imports : [CommonModule],
 exports : [FactorialComponent]
})
export class FurtherMathModule
{ }

