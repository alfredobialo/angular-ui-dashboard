import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'funny',
  template: `
    <div class="p-4">
      <p class="lead">Hello World</p>
      <div class="p-2">
        <h1>Hello {{info}}</h1>
        <p>Complex Info 1</p>
        <p>Complex Info 2</p>
        <p>Complex Info 3</p>
        <p>Complex Info 4</p>
      </div>
      <div>
        <button class="btn btn-primary" (click)="close()" >close dialog</button>
      </div>
    </div>`

})

export class FunnyComponent implements OnInit {
  info : string = "";
  constructor(private activeModal  : NgbActiveModal) {
  }
  close()
  {
    this.activeModal.close({
      message : "New Record Created Succesfully",
      data  : {
        name : 'John Doe',
        age : 30
      }
    });
  }
  ngOnInit() {
  }
}
