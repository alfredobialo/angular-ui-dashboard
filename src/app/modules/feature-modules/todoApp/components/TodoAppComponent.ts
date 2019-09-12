import {Component, OnInit} from '@angular/core';
import {ITodoItem} from "../model/ITodoItem";

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
                    <todo-list (onTodoDone)="todoDone($event)" 
                               (onTodoRemoved)="todoRemoved($event)"
                               [todos]="listOfTodos"></todo-list>
              </div>
          </div>
      </div>
  `
})

export class TodoAppComponent implements OnInit {
  listOfTodos: ITodoItem[] = [];
   constructor() {
  }

  ngOnInit() {
  }

  addToTodoList(todo: string) {
    this.listOfTodos.push(
      {
        title : todo,
        isDone: false
      });
  }


  todoRemoved(todo  : ITodoItem) {
    console.log(todo, "Removed" );
  }

  todoDone(todo : ITodoItem) {
    console.log(todo, "Done" );
  }
}
