import { Todo } from "./classes/Todo.js";
import { TodoList } from "./classes/TodoList.js";

// 데이터 값 input
const card = document.querySelector(".form-card") as HTMLFormElement;

const category = document.querySelector("#category") as HTMLSelectElement;
const title = document.querySelector("#todo-text") as HTMLTextAreaElement;
const duedate = document.querySelector("#todo-date") as HTMLInputElement;

const todoList = new TodoList();

// 등록 이벤트 발생
card.addEventListener("submit", (e:Event)=>{
  e.preventDefault();

  const todo = new Todo(category.value, title.value, duedate.value, false);
  // console.log(todo)
  todoList.register(todo);

  let todos : Todo[] = todoList.listAll();
  todos.forEach(function(i,index){
    console.log(i,index);
  })
  console.log(todoList.listAll());
})


// category enum 사용..........ㅠㅠㅠㅠㅠㅠ

// 데이터 리스트 렌더링
// 데이터가 없을 경우 리스트 없음 표시

