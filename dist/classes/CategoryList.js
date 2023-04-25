import { LocalStore } from "./LocalStore.js";
export class CategoryList {
    constructor() {
        this.localStore = new LocalStore();
        this.categoryList = this.localStore.getJsonCategoryItem();
    }
    register(category) {
        if (category.addItem(category)) {
            this.categoryList.push(category);
            this.localStore.setJsonCategoryItem(this.categoryList);
        }
        else {
            console.error('등록할 수 없는 아이템 입니다.');
        }
    }
    modify(index, category) {
    }
    delete(index, category) {
        this.categoryList = this.localStore.getJsonCategoryItem();
        this.categoryList.splice(index, 1);
        this.localStore.setJsonCategoryItem(this.categoryList);
    }
    listAll() {
        this.categoryList = this.localStore.getJsonCategoryItem();
        return this.categoryList;
    }
}
