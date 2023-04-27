import { Category } from "./category/Category.js";
import { Todo } from "./todo/Todo.js";

export class LocalStore {

  static getJsonItem<T>(name: string ) : T[] {
    const nowTodoListJson = localStorage.getItem(name);
    if (nowTodoListJson === null ){
      const newCategoryList : T[] = [];
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

type TodoTest = {
  name : string,
  code : string,
  test : number,
}
const a :TodoTest = {
  name : "123",
  code : "12",
  test : 123,
}
console.log (a);

const test : TodoTest = a;