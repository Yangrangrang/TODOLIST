import { LocalStore } from "./LocalStore.js";
// const initTodoList: Todo[] = [
//   {
//     title: "출근하기",
//     category: "업무",
//     duedate: "20230416",
//     isDone: true,
//   },
//   {
//     title: "마라톤 완주하기",
//     category: "운동",
//     duedate: "20231231",
//     isDone: false,
//   }
// ];
export class TodoList {
    constructor() {
        this.todoList = []; // todo를 담을 배열 생성
        this.localStore = new LocalStore();
    }
    // 등록 함수
    register(todo) {
        if (todo.addItem(todo)) {
            this.todoList.push(todo);
            this.localStore.setJsonItem(this.todoList);
        }
        else {
            console.error('등록할 수 없는 아이템 입니다.');
        }
        ;
    }
    ;
    // 삭제 함수
    delete(index, todo) {
        this.todoList = this.localStore.getJsonItem();
        this.todoList.splice(index, 1);
        this.localStore.setJsonItem(this.todoList);
    }
    ;
    // 수정 함수
    modify(index, todo) {
        this.todoList = this.localStore.getJsonItem();
        if (this.todoList[index].isDone) {
            this.todoList[index].isDone = false;
            this.localStore.setJsonItem(this.todoList);
        }
        else {
            this.todoList[index].isDone = true;
            this.localStore.setJsonItem(this.todoList);
        }
        ;
    }
    ;
    // 전체 리스트 함수 
    listAll() {
        this.todoList = this.localStore.getJsonItem();
        return this.todoList;
    }
    ;
}
