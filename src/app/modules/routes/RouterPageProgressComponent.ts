import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'ssb-router-progress',
  template: `<div class="p-3 d-flex justify-content-center align-items-center">
    <div class="align-content-center flex-column d-flex justify-content-center align-items-center">
      <ssb-spinner [visible]="true" class="blue-color" size="fa-4x"></ssb-spinner>
      <span class="lead text-muted">Processing...</span></div>
  </div>`,
  styles:[`
    .blue-color {
      color : #52bede;
    }
  `]
})

export class RouterPageProgressComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
