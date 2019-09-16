import {Route} from "@angular/router";
import {TodoAppComponent} from "./components/TodoAppComponent";

export const todoAppRoutes  : Route[] = [
  {
    path  : "todos",
    component : TodoAppComponent,
    data : {
      meta : {
        pageTitle :"Create Task and Manage Todos with ease",
        pageDescription :"Building a simple todo application"
      }
    }
  }
];
