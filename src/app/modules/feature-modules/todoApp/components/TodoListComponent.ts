import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'todo-list',
  template: `
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

export class TodoListComponent implements OnInit {
  listOfTodos: any[] = [];
  constructor() {
  }

  ngOnInit() {
  }
  changeTodoStatus(elem: HTMLInputElement,todo: any) {
    todo.done  = elem.checked;
  }

  changeTodoItemStatus(todo: any) {
    todo.done  = !todo.done;
  }
}
