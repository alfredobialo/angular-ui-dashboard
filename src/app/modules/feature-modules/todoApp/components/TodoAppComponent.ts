import {Component, OnInit} from '@angular/core';
import {ITodoItem, OnBeforeTodoRemovedEventArg} from "../model/ITodoItem";
import {TodoService} from "../services/TodoService";
import {snakeCase} from "lodash";
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
                               (beforeTodoRemoved)="todoBeforeRemoved($event)"
                               (onTodoRemoved)="todoRemoved($event)"
                               [todos]="listOfTodos"></todo-list>
              </div>
          </div>
      </div>
  `
})

export class TodoAppComponent implements OnInit {
  listOfTodos: ITodoItem[] = [];
   constructor(private todoService : TodoService) {
  }

  ngOnInit() {
     this.todoService.getTodos()
       .subscribe(x => {
         this.listOfTodos = x;
       });
  }

  addToTodoList(todo: string) {
     const t = {
       title : todo,
       isDone: false,
       id: snakeCase(todo)
     };
    this.todoService.addTodo(t)
      .subscribe(x => {
        if(x.success){
          this.listOfTodos.push(t);
        }
        else{
          alert("Could not add todo on the server!")
        }
      })
  }

  todoBeforeRemoved(evtArg : OnBeforeTodoRemovedEventArg) {
    evtArg.handled = confirm(`Do you want remove todo Item: ${evtArg.todo.title}`);
    console.log(evtArg, "Removed" );
  }

  todoRemoved(todo  : ITodoItem) {
    console.log(todo, "Removed todo at the backend" );
    this.todoService.removeTodo(todo)
      .subscribe(x => {
        if(!x.success) {
          alert("Could not remove Todo at the backend")
        }
      });
  }

  todoDone(todo : ITodoItem) {
    console.log(todo, "Done" );
    this.todoService.markTodoAsDone(todo)
      .subscribe(x => {
        if(!x.success) {
          alert("Could not update todo at the backend")
        }
      });
  }
}
