import {Component, OnInit, Output, Input, EventEmitter} from '@angular/core';
import {ITodoItem, OnBeforeTodoRemovedEventArg} from "../model/ITodoItem";

@Component({
  selector: 'todo-list',
  template: `
      <div class="p-4 ">
          <div *ngFor="let todo of listOfTodo" class="row mb-2" [class.font-italic]="todo.isDone"
               [ngClass]="{'todo-done' : todo.isDone, 'todo-item' : !todo.isDone}">
              <div class="col-8 p-2 d-flex flex-row justify-content-start align-items-center" >
                  <p class="lead font-weight-bold"
                     (dblclick)="changeTodoItemStatus(todo)"
                  >{{todo.title}}</p>
              </div>
              <div class="col-sm-4 p-2 d-flex flex-row justify-content-start align-items-center">
                  <input type="checkbox"
                         [checked]="todo.isDone" #checkElem
                         (change)="changeTodoStatus(checkElem,todo)"
                         class="todo-checkbox"> &nbsp; &nbsp;
                  <button class="btn-danger btn btn-sm" (click)="beforeRemoveTodoHandler(todo,true)"><span class="fa fa-trash"></span></button>
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
          cursor: pointer;

      }
    input[type=checkbox].todo-checkbox
    {
        padding : 1.99rem;
        border : solid 1px #555555;
        outline: none;

    }
  `]
})

export class TodoListComponent implements OnInit {

  @Input("todos") listOfTodo: ITodoItem[] = [];

  @Output() onTodoRemoved : EventEmitter<ITodoItem> =  new EventEmitter<ITodoItem>();
  @Output() beforeTodoRemoved : EventEmitter<OnBeforeTodoRemovedEventArg> =  new EventEmitter<OnBeforeTodoRemovedEventArg>();
  @Output() onTodoDone : EventEmitter<ITodoItem> =  new EventEmitter<ITodoItem>();
  constructor() {
  }

  ngOnInit() {
  }
  changeTodoStatus(elem: HTMLInputElement,todo: any) {
    todo.isDone  = elem.checked;
    this.onTodoDone.emit(todo);
  }

  changeTodoItemStatus(todo: ITodoItem) {
    todo.isDone  = !todo.isDone;
    this.onTodoDone.emit(todo);
  }

  beforeRemoveTodoHandler(todo : ITodoItem, handled : boolean){
    this.beforeTodoRemoved.emit( {
      todo ,
      handled
    });

    if(handled){
      this.removeTodo(todo);
    }
  }
  removeTodo(todo: ITodoItem) {

      const index  = this.listOfTodo.indexOf(todo);
      if(index > -1)
      {
        this.listOfTodo.splice(index,1);
        this.onTodoRemoved.emit(todo)
      }

  }
}
