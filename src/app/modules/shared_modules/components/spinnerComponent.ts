import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ssb-spinner',
  template: `<span *ngIf="visible">
    <i class="fa {{size || ''}} fa-spin fa-circle-o-notch"></i>
  </span> &nbsp; &nbsp;
  <ng-content *ngIf="visible"></ng-content>`
})

export class SpinnerComponent implements OnInit {
  @Input() visible: boolean  = false;
  @Input() size : string  = null;

  constructor() {
  }

  ngOnInit() {
  }
}
