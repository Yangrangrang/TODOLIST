export class LocalStore {
    static getJsonItem(name) {
        const nowTodoListJson = localStorage.getItem(name);
        if (nowTodoListJson === null) {
            const newCategoryList = [];
            this.saveJsonItem(newCategoryList, name);
            return newCategoryList;
        }
        return JSON.parse(nowTodoListJson);
    }
    static saveJsonItem(List, name) {
        const newTodoListJson = JSON.stringify(List);
        localStorage.setItem(name, newTodoListJson);
    }
}
