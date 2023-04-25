export class LocalStore {
    getJsonItem() {
        const nowTodoListJson = localStorage.getItem('todoList');
        return JSON.parse(nowTodoListJson);
    }
    setJsonItem(todoList) {
        const newTodoListJson = JSON.stringify(todoList);
        localStorage.setItem('todoList', newTodoListJson);
    }
}
