import { Todo } from "./Todo.js";

export class LocalStore {
  
  getJsonItem() : Todo[]{
    const nowTodoListJson = localStorage.getItem('todoList')!;
    return JSON.parse(nowTodoListJson);
  }

  setJsonItem(todoList: Todo[] ){
    const newTodoListJson = JSON.stringify(todoList);
    localStorage.setItem('todoList', newTodoListJson);
  }

}