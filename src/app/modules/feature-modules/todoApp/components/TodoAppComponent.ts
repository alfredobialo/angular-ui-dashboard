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
                  <div class="p-4">
                      <div *ngFor="let todo of listOfTodos" class="row mb-2"
                           [ngClass]="{'todo-done' : todo.done, 'todo-item' : !todo.done}">
                          <div class="col-8 p-2">
                              <p class="lead font-weight-bold"
                                 (dblclick)="changeTodoItemStatus(todo)"
                                >{{todo.todo}}</p>
                          </div>
                          <div class="col-sm-3 p-2">
                              <input type="checkbox"
                                     [checked]="todo.done" #checkElem 
                                     (change)="changeTodoStatus(checkElem,todo)"
                                     class="form-control form-check-input">
                          </div>
                         
                      </div>
                  </div>


              </div>
          </div>
      </div>
  `,
  styles: [`
      .todo-done {
          color: #e5868b;
          background-color: #f9fbff;
      }
      .todo-done p.lead
      {
          text-decoration: line-through;
          font-weight: bold;
      }

      .todo-item {
          color: #26aff6;

      }
  `]
})

export class TodoAppComponent implements OnInit {
  listOfTodos: any[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  addToTodoList(todo: string) {
    this.listOfTodos.push(
      {
        todo,
        done: false
      });
  }

  changeTodoStatus(elem: HTMLInputElement,todo: any) {
      todo.done  = elem.checked;
  }

  changeTodoItemStatus(todo: any) {
    todo.done  = !todo.done;
  }
}
