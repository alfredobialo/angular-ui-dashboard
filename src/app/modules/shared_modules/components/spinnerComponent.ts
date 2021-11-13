import {Component, Input, OnInit,HostBinding, AfterViewInit} from '@angular/core';

@Component({
  selector: 'ssb-spinner',
  template: `<span *ngIf="visible">
    <i class="fa {{size || ''}} fa-spin fa-circle-o-notch"></i>
  </span> &nbsp; &nbsp;
  <ng-content *ngIf="visible"></ng-content>`
})

export class SpinnerComponent implements OnInit, AfterViewInit {
  @HostBinding("style.display") display;
  @Input() visible: boolean  = false;
  @Input() size : string  = null;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {/*
    if(!this.visible){
      console.log(this.display);
      this.display = "none";
    }
    else {
      this.display = "block";
    }*/
  }
}
