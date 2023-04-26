import { ListTemplate } from "./classes/Templates/ListTemplate.js";
import { TodoList } from "./classes/todo/TodoList.js";
import { Todo } from "./classes/todo/Todo.js";

const ul = document.querySelector('ul')!;

const todoList = new TodoList();
const listTemplate = new ListTemplate(ul);

let todos : Todo[]= [];

// list 확인
todos = todoList.listAll();

// list 데이터가 여부에 따른 렌딩 페이지
if (todos.length === 0){
  listTemplate.notPage();
} else {
  todos.forEach(function(i,index){
    listTemplate.render(i, index);
  });
}