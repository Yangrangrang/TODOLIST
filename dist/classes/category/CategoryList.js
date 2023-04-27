import { deleteFunc, checkValid } from "./Category.js";
import { LocalStore } from "../LocalStore.js";
export class CategoryList {
    constructor() {
        this.listName = "categoryList";
        this.categoryList = LocalStore.getJsonItem(this.listName);
        this.todoList = LocalStore.getJsonItem("todoList");
    }
    register(category) {
        let checkCategory = new checkValid();
        if (checkCategory.addItem(category, this.categoryList)) {
            this.categoryList.push(category);
            LocalStore.saveJsonItem(this.categoryList, this.listName);
        }
        else {
            alert('등록할 수 없는 아이템 입니다.');
            console.error('등록할 수 없는 아이템 입니다.');
        }
        ;
    }
    ;
    modify(index, category) {
    }
    delete(index, category) {
        let func = new deleteFunc();
        console.log(this.todoList);
        if (func.checkDeleteList(category, this.todoList)) {
            this.categoryList = LocalStore.getJsonItem(this.listName);
            this.categoryList.splice(index, 1);
            console.log(this.categoryList);
            LocalStore.saveJsonItem(this.categoryList, this.listName);
        }
        else {
            alert('삭제할 수 없는 아이템 입니다.');
            console.error('삭제할 수 없는 아이템 입니다.');
        }
        ;
    }
    ;
    listAll() {
        this.categoryList = LocalStore.getJsonItem(this.listName);
        return this.categoryList;
    }
    ;
}
;
