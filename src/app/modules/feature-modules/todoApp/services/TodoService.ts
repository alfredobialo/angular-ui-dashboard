import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BaseHttpService} from "../../../BaseHttpService";
import {ITodoItem} from "../model/ITodoItem";
import {Observable} from "rxjs";


@Injectable({providedIn: "root"})
export class TodoService extends BaseHttpService {
  baseUrl : string = `${this.apiEndPoint}/todo`;
  constructor(http: HttpClient) {
    super(http);
  }

  getTodos() : Observable<ITodoItem[]> {

    return this.http.get<ITodoItem[]>(this.baseUrl);
  }
  addTodo(todoItem : ITodoItem) : Observable<any>{
    // add a todo to list of Todos on the server
    return this.http.post(this.baseUrl,todoItem);
  }
  markTodoAsDone(todoItem : ITodoItem) : Observable<any>{
    // add a todo to list of Todos on the server
    return this.http.put(this.baseUrl,todoItem);
  }
  removeTodo(todoItem : ITodoItem) : Observable<any>{
    // add a todo to list of Todos on the server
    return this.http.delete(`${this.baseUrl}/${todoItem.id}`);
  }
}
