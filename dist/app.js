import { ListTemplate } from "./classes/ListTemplate.js";
import { Todo } from "./classes/Todo.js";
import { TodoList } from "./classes/TodoList.js";
// 선택자
const card = document.querySelector(".form-card");
const ul = document.querySelector('ul');
const category = document.querySelector("#category");
const title = document.querySelector("#todo-text");
const duedate = document.querySelector("#todo-date");
// as 키워드를 사용해서 해당 객체의 타입을 명시 해줌으로써, 해당객체를 HTMLFormElement타입로 캐스팅할 수 있음.
// 인스턴스화
const todoList = new TodoList();
const listTemplate = new ListTemplate(ul);
// TODO타입의 배열 선언
let todos = [];
// 등록 이벤트
card.addEventListener("submit", (e) => {
    e.preventDefault();
    const todo = new Todo(category.value, title.value, parseInt(duedate.value), false);
    todoList.register(todo);
});
// list 확인
todos = todoList.listAll();
// list 데이터가 여부에 따른 렌딩 페이지
if (todos.length === 0) {
    listTemplate.notPage();
}
else {
    todos.forEach(function (i, index) {
        listTemplate.render(i, index);
    });
}
