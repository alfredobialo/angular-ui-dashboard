import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PagerButtonComponent, AsomDataPagerComponent} from './ui-components/PagerComponent';

@NgModule({
    imports: [CommonModule],
    exports: [AsomDataPagerComponent, PagerButtonComponent],
    declarations: [AsomDataPagerComponent, PagerButtonComponent],
    providers: [],
})
export class CoreUiModules {
}



