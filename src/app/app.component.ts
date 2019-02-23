
import {Component, VERSION, OnInit, OnDestroy, EventEmitter, Output} from '@angular/core';
import {Title, Meta} from "@angular/platform-browser";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  appVersion = VERSION.full;
  title = `Custom UI/UX Component Design Angular ${this.appVersion}`;
  constructor(private pgTitle : Title)
  {
  }
  ngOnInit(): void {

    this.pgTitle.setTitle("Alfred Obialo Bio");

  }

  ngOnDestroy(): void {

  }

}
