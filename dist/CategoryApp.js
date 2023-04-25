import { Category } from "./classes/Category.js";
import { CategoryList } from "./classes/CategoryList.js";
// 선택자 
const form = document.querySelector(".form-card");
const categoryText = document.querySelector("#category-text");
const categoryList = new CategoryList();
let categorys = [];
// 등록
const test = form.addEventListener("submit", (e) => {
    e.preventDefault();
    let indexStr = localStorage.getItem('categoryIndex');
    let index = Number(indexStr);
    index++;
    const category = new Category(index, categoryText.value);
    categoryList.register(category);
    localStorage.setItem('categoryIndex', String(index));
});
// list 확인
categorys = categoryList.listAll();
// 
