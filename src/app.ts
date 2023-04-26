import { Category } from "./classes/category/Category.js";
import { CategoryList } from "./classes/category/CategoryList.js";
import { Todo } from "./classes/todo/Todo.js";
import { TodoList } from "./classes/todo/TodoList.js";
import { TodoTemplate } from "./classes/Templates/TodoTemplate.js";

// 선택자
const card = document.querySelector(".form-card") as HTMLFormElement;
// const ul = document.querySelector('ul')!;
const select = document.querySelector('select')!;

const category = document.querySelector("#category") as HTMLSelectElement;
const title = document.querySelector("#todo-text") as HTMLTextAreaElement;
const duedate = document.querySelector("#todo-date") as HTMLInputElement;
// as 키워드를 사용해서 해당 객체의 타입을 명시 해줌으로써, 해당객체를 HTMLFormElement타입로 캐스팅할 수 있음.

// 인스턴스화
const todoList = new TodoList();
const categoryList = new CategoryList();
// const listTemplate = new ListTemplate(ul);
const todoTemplate = new TodoTemplate(select);

// TODO타입의 배열 선언
let todos : Todo[]= [];
let categorys : Category[]=[];

// 등록 이벤트
card.addEventListener("submit", (e:Event)=>{
  e.preventDefault();
  let indexStr = localStorage.getItem('todoItemIndex');

  let index = Number(indexStr);
  index++;
  
  const todo = new Todo(index,category.value, title.value, parseInt(duedate.value), false);
  todoList.register(todo);
  localStorage.setItem('todoItemIndex', String(index));


  location.href = "todoList.html";
});

// list 확인
// todos = todoList.listAll();
categorys = categoryList.listAll();

// categorylist 
if (categorys.length === 0){
  todoTemplate.notCategoryListContainer();
}
categorys.forEach(function(category, index){
  todoTemplate.categoryListContainer(category, index);
})

// // list 데이터가 여부에 따른 렌딩 페이지
// if (todos.length === 0){
//   listTemplate.notPage();
// } else {
//   todos.forEach(function(i,index){
//     listTemplate.render(i, index);
//   });
// }




