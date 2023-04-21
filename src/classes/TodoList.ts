import { Todo } from "./Todo";
import { HasFormatter } from "../interfaces/HasFormatter";

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

export class TodoList implements HasFormatter{
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

    // 완료 예정일 8자리 수 확인, 날짜 유효성 확인
    if (todo.duedate.length !== 8 && !Number.isNaN(Number(todo.duedate) && todo.day())){
      alert("날짜확인");
    } else {
      this.todos.push(todo);

      const newTodoListJson = JSON.stringify(this.todos);
      localStorage.setItem('todoList', newTodoListJson);
    }
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


