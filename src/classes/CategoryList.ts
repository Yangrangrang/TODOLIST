import { HasFormatter } from "../interfaces/HasFormatter";
import { Category } from "./Category";
import { LocalStore } from "./LocalStore.js";

export class CategoryList implements HasFormatter{

  localStore = new LocalStore();
  categoryList : Category[] = this.localStore.getJsonCategoryItem();

  register(category: Category): void {
    if (category.addItem(category)){
      this.categoryList.push(category);
      this.localStore.setJsonCategoryItem(this.categoryList);
    } else {
      console.error('등록할 수 없는 아이템 입니다.')
    }
    
  }
  
  modify(index: number, category: object): void {
    
  }

  delete(index: number, category: object): void {
    this.categoryList = this.localStore.getJsonCategoryItem();
    this.categoryList.splice(index,1);
    this.localStore.setJsonCategoryItem(this.categoryList);
  }

  listAll(): Category[] {
    this.categoryList = this.localStore.getJsonCategoryItem();
    return this.categoryList;
  }
}