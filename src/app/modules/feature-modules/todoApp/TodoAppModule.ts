import {NgModule} from '@angular/core';

import {TodoAppComponent} from './components/TodoAppComponent';
import {SsbSharedModule} from "../../shared_modules/SharedModules";
import {RouterModule} from "@angular/router";
import {todoAppRoutes} from "./todoAppRoute";
import {AddTodoComponent} from "./components/AddTodoComponent";
import {TodoListComponent} from "./components/TodoListComponent";
import {todoReducer} from "./state/todo.reducer";
import {StoreModule} from "@ngrx/store";

@NgModule({
  imports: [SsbSharedModule, RouterModule.forChild(todoAppRoutes),
    StoreModule.forFeature("todos", {})],
  exports: [],
  declarations: [TodoAppComponent, AddTodoComponent, TodoListComponent],
  providers: [],
})
export class TodoAppModule {
}
