import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';

@Component({
  selector: 'simple-timer-component',
  changeDetection:ChangeDetectionStrategy.OnPush,
  template: `
    <h1> {{ time }}</h1>
  `
})

export class SimpleTimerComponent implements OnInit {
  time  : string   =  new Date().getDate().toLocaleString();
  constructor(private cdf : ChangeDetectorRef) {
  }

  ngOnInit() {
    window.setInterval(() => { this.time = new Date().toLocaleString();
      this.cdf.detectChanges();
    }, 1000)
  }
}
