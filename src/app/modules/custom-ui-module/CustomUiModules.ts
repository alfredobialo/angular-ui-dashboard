import {NgModule} from '@angular/core';

import {AspnetApiContainerComponent} from './components/aspnetApiContainerComponent';
import {AspnetApiHttpGetComponent} from './components/AspnetApiHttpGet';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {AspnetApiHttpPost} from './components/AspnetApiHttpPost';
import {AspnetApiService} from './services/AspnetApiService';

@NgModule({
  imports: [HttpClientModule, CommonModule],
  exports: [AspnetApiContainerComponent],
  declarations: [AspnetApiContainerComponent,AspnetApiHttpGetComponent, AspnetApiHttpPost],
  providers: [AspnetApiService],
})
export class AspnetModule {
}
