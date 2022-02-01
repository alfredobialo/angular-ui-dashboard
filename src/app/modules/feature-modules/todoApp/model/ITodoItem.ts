export interface ITodoItem {
  title : string;
  id : string;
  isDone? : boolean;
}
export interface OnBeforeTodoRemovedEventArg
{
  todo :ITodoItem;
  handled :boolean // if the event was handler by subscribers
}
