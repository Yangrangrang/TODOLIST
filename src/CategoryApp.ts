import { Category } from "./classes/Category.js";
import { CategoryList } from "./classes/CategoryList.js"

// 선택자 
const form = document.querySelector(".form-card") as HTMLFormElement

const categoryText = document.querySelector("#category-text") as HTMLInputElement

const categoryList = new CategoryList();

let categorys : Category[] = [];

// 등록
const test = form.addEventListener("submit", (e: Event)=> {
  e.preventDefault();
  let indexStr = localStorage.getItem('categoryIndex');

  let index = Number(indexStr);
  index++;

  const category = new Category(index,categoryText.value);
  categoryList.register(category);

  localStorage.setItem('categoryIndex', String(index));
});


// list 확인
categorys = categoryList.listAll();

// 