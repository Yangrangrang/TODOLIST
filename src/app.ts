import { ListTemplate } from "./classes/ListTemplate.js";
import { Todo } from "./classes/Todo.js";
import { TodoList } from "./classes/TodoList.js";

// 데이터 값 input
const card = document.querySelector(".form-card") as HTMLFormElement;
const ul = document.querySelector('ul')!;

const category = document.querySelector("#category") as HTMLSelectElement;
const title = document.querySelector("#todo-text") as HTMLTextAreaElement;
const duedate = document.querySelector("#todo-date") as HTMLInputElement;

const todoList = new TodoList();
const listTemplate = new ListTemplate(ul);
let todos : Todo[]= [];

// 등록 이벤트 발생
card.addEventListener("submit", (e:Event)=>{
  e.preventDefault();

  const todo = new Todo(category.value, title.value, duedate.value, false);
  // console.log(todo)
  todoList.register(todo);

});

// list 확인
todos = todoList.listAll();

// console.log(todos.length);

// list 데이터가 여부에 따른 렌딩 페이지
if (todos.length === 0){
  listTemplate.notPage();
} else {
  // console.log("test");
  todos.forEach(function(i,index){
    // console.log(i,index);
    // console.log(i);
    listTemplate.render(i, index);
  });
  // console.log(todoList.listAll());
}

// category enum 사용..........ㅠㅠㅠㅠㅠㅠ

// 데이터 리스트 렌더링


