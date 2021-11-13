import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AlertService} from '../../../shared_modules/AlertService';

@Component({
  selector: 'add-todo',
  template: `
    <p class="add-todo-title">Add New Todo</p>
    <form name="frmAddTodo" class="form" role="form" novalidate
          (ngSubmit)="notifyListeners(valueAdded)">
      <div class="">
        <label for="txtAddTodo" class="lead">Add Todo</label>
      </div>
      <div class="row">
        <div class="col-sm-8 col-12">
          <input #valueAdded type="text"
                 class="form-control-lg form-control"
                 id="txtAddTodo" value=""
                 placeholder="Enter Todo">
        </div>
        <div class="col-sm-4 col-12 ">
          <button class="btn btn-outline-primary btn-lg">Add Todo</button>
        </div>
      </div>
    </form>

  `,
  styles: [`
    p.add-todo-title {
      padding: 0.5rem;
      font-size: 1.7rem;
      color: #0074D9;

    }
  `]

})

export class AddTodoComponent implements OnInit {

  @Output() onTodoAdded: EventEmitter<string> = new EventEmitter<string>();

  constructor(private alertService: AlertService) {
  }

  ngOnInit() {
  }

  notifyListeners(elem: HTMLInputElement) {

    this.alertService.alert("Enter ToDo Item", () => {
      return !(elem.value === '');
    }).then((response) => {
      this.onTodoAdded.emit(elem.value);
      elem.value = "";
      console.log("Resolved Promise : ", response);
    }, (reject) => {
      elem.focus();
      console.log("Reject", reject);
      return false;
    });

  }
}
