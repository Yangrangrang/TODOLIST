import { deleteFunc, checkValid } from "./Category.js";
import { LocalStore } from "../LocalStore.js";
export class CategoryList {
    constructor() {
        this.localStore = new LocalStore();
        this.categoryList = this.localStore.getJsonCategoryItem();
        this.todoList = this.localStore.getJsonTodoItem();
    }
    register(category) {
        let checkCategory = new checkValid();
        if (checkCategory.addItem(category, this.categoryList)) {
            this.categoryList.push(category);
            this.localStore.setJsonCategoryItem(this.categoryList);
        }
        else {
            console.error('등록할 수 없는 아이템 입니다.');
        }
        ;
    }
    ;
    modify(index, category) {
    }
    delete(index, category) {
        let func = new deleteFunc();
        if (func.checkDeleteList(category, this.todoList)) {
            this.categoryList = this.localStore.getJsonCategoryItem();
            this.categoryList.splice(index, 1);
            console.log(this.categoryList);
            this.localStore.setJsonCategoryItem(this.categoryList);
        }
        else {
            alert('삭제할 수 없는 아이템 입니다.');
            console.error('삭제할 수 없는 아이템 입니다.');
        }
        ;
    }
    ;
    listAll() {
        this.categoryList = this.localStore.getJsonCategoryItem();
        return this.categoryList;
    }
    ;
}
;
