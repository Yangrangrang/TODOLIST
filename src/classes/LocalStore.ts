import { Category } from "./category/Category.js";
import { Todo } from "./todo/Todo.js";

export class LocalStore {
  
  getJsonTodoItem() : Todo[]{
    const nowTodoListJson = localStorage.getItem('todoList');
    if (nowTodoListJson === null ){
      const newCategoryList : Todo[] = [];
      this.setJsonTodoItem(newCategoryList);
      return newCategoryList;
    }
    return JSON.parse(nowTodoListJson);
  }

  setJsonTodoItem(todoList: Todo[] ){
    const newTodoListJson = JSON.stringify(todoList);
    localStorage.setItem('todoList', newTodoListJson);
  }

  getJsonCategoryItem() : Category[]{
    const nowCategoryListJson = localStorage.getItem('categoryList');
    if (nowCategoryListJson === null){
      const newCategoryList :Category[] = [];
      this.setJsonCategoryItem(newCategoryList);
      return newCategoryList;
    }
    return JSON.parse(nowCategoryListJson);
  }

  setJsonCategoryItem(categoryList: Category[]) {
    const newCategoryListJson = JSON.stringify(categoryList);
    localStorage.setItem('categoryList', newCategoryListJson);
  }

}