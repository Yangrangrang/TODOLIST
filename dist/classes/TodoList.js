import { LocalStore } from "./LocalStore.js";
export class TodoList {
    constructor() {
        this.todoList = []; // todo를 담을 배열 생성
        this.localStore = new LocalStore();
    }
    // 등록 함수
    register(todo) {
        if (todo.addItem(todo)) {
            this.todoList.push(todo);
            this.localStore.setJsonTodoItem(this.todoList);
        }
        else {
            console.error('등록할 수 없는 아이템 입니다.');
        }
        ;
    }
    ;
    // 삭제 함수
    delete(index, todo) {
        this.todoList = this.localStore.getJsonTodoItem();
        this.todoList.splice(index, 1);
        this.localStore.setJsonTodoItem(this.todoList);
    }
    ;
    // 수정 함수
    modify(index, todo) {
        this.todoList = this.localStore.getJsonTodoItem();
        if (this.todoList[index].isDone) {
            this.todoList[index].isDone = false;
            this.localStore.setJsonTodoItem(this.todoList);
        }
        else {
            this.todoList[index].isDone = true;
            this.localStore.setJsonTodoItem(this.todoList);
        }
        ;
    }
    ;
    // 전체 리스트 함수 
    listAll() {
        this.todoList = this.localStore.getJsonTodoItem();
        return this.todoList;
    }
    ;
}
