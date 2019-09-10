import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'add-todo',
  template: `
    
    <p class="add-todo-title">Add New Todo</p>
      <form name="frmAddTodo" class="form" role="form" novalidate (ngSubmit)="notifyListeners(valueAdded)">
          <div class="row">
              <div class="col-sm-3 col-5">
                  <label for="txtAddTodo" class="lead">Add Todo</label>
              </div>
              <div class="col-sm-7 col-7">
                  <input #valueAdded type="text" class="form-control-lg form-control" id="txtAddTodo">
              </div>
              <div class="col-sm-2">
                  <button class="btn btn-primary btn-lg">Add</button>
              </div>
          </div>
      </form>

  `,
  styles :[`    
    p.add-todo-title
    {
        padding : 0.5rem;
        font-size : 1.7rem;
        color: #0074D9;
        
    }
  `]

})

export class AddTodoComponent implements OnInit {

  @Output() onTodoAdded : EventEmitter<string> =  new EventEmitter<string>();
  constructor() {
  }

  ngOnInit() {
  }

  notifyListeners(elem: HTMLInputElement) {

    console.log(elem);
    this.onTodoAdded.emit(elem.value);
    elem.value  = "";
  }
}
