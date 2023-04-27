import { HasFormatter } from "../../interfaces/HasFormatter.js";
import { Category, deleteFunc, checkValid } from "./Category.js";
import { LocalStore } from "../LocalStore.js";
import { Todo } from "../todo/Todo.js";

export class CategoryList implements HasFormatter{
  listName = "categoryList";
  categoryList : Category[] = LocalStore.getJsonItem(this.listName);
  todoList : Todo[] = LocalStore.getJsonItem("todoList")


  register(category: Category): void {
    let checkCategory = new checkValid();

    if (checkCategory.addItem(category ,this.categoryList)){
      this.categoryList.push(category);
      LocalStore.saveJsonItem(this.categoryList, this.listName);
    } else {
      alert('등록할 수 없는 아이템 입니다.');
      console.error('등록할 수 없는 아이템 입니다.');
    };
  };
  
  modify(index: number, category: object): void {
    
  }

  delete(index: number, category: Category): void {
    let func = new deleteFunc();
    console.log(this.todoList);
    if (func.checkDeleteList(category, this.todoList)){
      this.categoryList = LocalStore.getJsonItem(this.listName);
      this.categoryList.splice(index,1);
      console.log(this.categoryList)
      LocalStore.saveJsonItem(this.categoryList, this.listName);
    } else {
      alert('삭제할 수 없는 아이템 입니다.');
      console.error('삭제할 수 없는 아이템 입니다.');
    };
  };

  listAll(): Category[] {
    this.categoryList = LocalStore.getJsonItem(this.listName);
    return this.categoryList;
  };
};