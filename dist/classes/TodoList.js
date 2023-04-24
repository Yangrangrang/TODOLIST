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
        this.todos = [];
        const nowTodoListJson = localStorage.getItem('todoList');
        if (nowTodoListJson === null) {
            // const initTodoListJson = JSON.stringify(initTodoList);
            // localStorage.setItem('todoList',initTodoListJson);
            // this.todos = initTodoList;
        }
        else {
            const nowTodoList = JSON.parse(nowTodoListJson);
            this.todos = nowTodoList;
        }
    }
    jsonSetListFunc() {
        const newTodoListJson = JSON.stringify(this.todos);
        localStorage.setItem('todoList', newTodoListJson);
    }
    // 등록 함수
    register(todo) {
        // 완료 예정일 8자리 수 확인, 날짜 유효성 확인 지난 날짜확인...
        if (todo.duedate.length !== 8 || Number.isNaN(Number(todo.duedate)) || !todo.day()) {
            alert("날짜확인");
        }
        else {
            this.todos.push(todo);
            this.jsonSetListFunc();
        }
    }
    // 삭제 함수
    delete(index) {
        console.log(index);
        console.log(this.todos);
        this.todos.splice(index, 1);
        console.log(this.todos);
        this.jsonSetListFunc();
    }
    // // 수정 함수F (isDone)
    // modifyF(index: number): void {
    //   this.todos[index].isDone = false;
    //   // console.log(this.todos[index]);
    //   this.jsonFunc();
    // }
    //  // 수정 함수T (isDone)
    //  modifyT(index: number): void {
    //   this.todos[index].isDone = true;
    //   console.log(this.todos[index]);
    //   this.jsonFunc();
    // }

    modify(index, todo) {
        if (this.todos[index].isDone) {
            this.todos[index].isDone = false;
            this.jsonSetListFunc();
        }
        else {
            this.todos[index].isDone = true;
            this.jsonSetListFunc();
        }
    }
    // 전체 리스트 함수 
    listAll() {
        return this.todos;
    }
}
