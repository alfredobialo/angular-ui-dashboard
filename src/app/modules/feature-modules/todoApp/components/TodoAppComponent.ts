import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'todo-app-container',
  template: `
      <div class="container">
          <div class="jumbotron mb-3">
              <h1>Todo Application</h1>
          </div>
          <div class="div row">
              <div class="col-sm-5 col-12">
                  <add-todo (onTodoAdded)="addToTodoList($event)"></add-todo>
              </div>
              <div class="col-sm-7 col-12">
             
              </div>
          </div>
      </div>
  `
})

export class TodoAppComponent implements OnInit {
   constructor() {
  }

  ngOnInit() {
  }

  addToTodoList(todo: string) {
   /* this.listOfTodos.push(
      {
        todo,
        done: false
      });*/
  }


}
