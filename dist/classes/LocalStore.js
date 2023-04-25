export class LocalStore {
    getJsonTodoItem() {
        const nowTodoListJson = localStorage.getItem('todoList');
        if (nowTodoListJson === null) {
            const newCategoryList = [];
            this.setJsonTodoItem(newCategoryList);
            return newCategoryList;
        }
        return JSON.parse(nowTodoListJson);
    }
    setJsonTodoItem(todoList) {
        const newTodoListJson = JSON.stringify(todoList);
        localStorage.setItem('todoList', newTodoListJson);
    }
    getJsonCategoryItem() {
        const nowCategoryListJson = localStorage.getItem('categoryList');
        if (nowCategoryListJson === null) {
            const newCategoryList = [];
            this.setJsonCategoryItem(newCategoryList);
            return newCategoryList;
        }
        return JSON.parse(nowCategoryListJson);
    }
    setJsonCategoryItem(categoryList) {
        const newCategoryListJson = JSON.stringify(categoryList);
        localStorage.setItem('categoryList', newCategoryListJson);
    }
}
