import { Todo } from "./Todo";

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
  todos : Todo[] = [];
  
  constructor (){
    const nowTodoListJson = localStorage.getItem('todoList');

    if(nowTodoListJson === null) {
      // const initTodoListJson = JSON.stringify(initTodoList);
      // localStorage.setItem('todoList',initTodoListJson);
      // this.todos = initTodoList;
    } else {
      const nowTodoList = JSON.parse(nowTodoListJson);
      this.todos = nowTodoList;
    }
  }

  // 등록 함수
  register(todo: Todo): void {
    this.todos.push(todo);

    const newTodoListJson = JSON.stringify(this.todos);
    localStorage.setItem('todoList', newTodoListJson);
  }

  // 삭제 함수
  delete(index: number): void {
    this.todos.splice(index, 1);

    const newTodoListJson = JSON.stringify(this.todos);
    localStorage.setItem('todoList', newTodoListJson);
  }

  // 리스트 함수 
  listAll(): Todo[] {
    return this.todos;
  } 
}


