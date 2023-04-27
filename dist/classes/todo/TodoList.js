import { LocalStore } from "../LocalStore.js";
export class TodoList {
    constructor() {
        this.todoList = []; // todo를 담을 배열 생성
        this.listName = "todoList";
    }
    // 등록 함수
    register(todo) {
        this.todoList = LocalStore.getJsonItem(this.listName);
        if (todo.addItem(todo)) {
            this.todoList.push(todo);
            LocalStore.saveJsonItem(this.todoList, this.listName);
        }
        else {
            console.error('등록할 수 없는 아이템 입니다.');
        }
        ;
    }
    ;
    // 삭제 함수
    delete(index, todo) {
        this.todoList = LocalStore.getJsonItem(this.listName);
        this.todoList.splice(index, 1);
        LocalStore.saveJsonItem(this.todoList, this.listName);
    }
    ;
    // 수정 함수
    modify(index, todo) {
        this.todoList = LocalStore.getJsonItem(this.listName);
        if (this.todoList[index].isDone) {
            this.todoList[index].isDone = false;
            LocalStore.saveJsonItem(this.todoList, this.listName);
        }
        else {
            this.todoList[index].isDone = true;
            LocalStore.saveJsonItem(this.todoList, this.listName);
        }
        ;
    }
    ;
    // 전체 리스트 함수 
    listAll() {
        this.todoList = LocalStore.getJsonItem(this.listName);
        return this.todoList;
    }
    ;
}
