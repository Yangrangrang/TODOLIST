import { HasFormatter } from "../../interfaces/HasFormatter.js";
import { Category, deleteFunc, checkValid } from "./Category.js";
import { LocalStore } from "../LocalStore.js";
import { Todo } from "../todo/Todo.js";

export class CategoryList implements HasFormatter{

  localStore = new LocalStore();
  categoryList : Category[] = this.localStore.getJsonCategoryItem();
  todoList : Todo[] = this.localStore.getJsonTodoItem();

  register(category: Category): void {
    let checkCategory = new checkValid();
    if (checkCategory.addItem(category ,this.categoryList)){
      this.categoryList.push(category);
      this.localStore.setJsonCategoryItem(this.categoryList);
    } else {
      console.error('등록할 수 없는 아이템 입니다.');
    };
  };
  
  modify(index: number, category: object): void {
    
  }

  delete(index: number, category: Category): void {
    let func = new deleteFunc();
    if (func.checkDeleteList(category, this.todoList)){
      this.categoryList = this.localStore.getJsonCategoryItem();
      this.categoryList.splice(index,1);
      console.log(this.categoryList)
      this.localStore.setJsonCategoryItem(this.categoryList);
    } else {
      alert('삭제할 수 없는 아이템 입니다.');
      console.error('삭제할 수 없는 아이템 입니다.');
    };
  };

  listAll(): Category[] {
    this.categoryList = this.localStore.getJsonCategoryItem();
    return this.categoryList;
  };
};