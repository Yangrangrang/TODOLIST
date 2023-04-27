import { Category } from "./category/Category.js";
import { Todo } from "./todo/Todo.js";

export class LocalStore {

  static getJsonItem(name: string ) : any {
    const nowTodoListJson = localStorage.getItem(name);
    if (nowTodoListJson === null ){
      const newCategoryList : Object[] = [];
      this.saveJsonItem(newCategoryList, name);
      return newCategoryList;
    }
    return JSON.parse(nowTodoListJson);
  }
  static saveJsonItem(List: Object, name: string,){
    const newTodoListJson = JSON.stringify(List);
    localStorage.setItem(name, newTodoListJson);
  }
}