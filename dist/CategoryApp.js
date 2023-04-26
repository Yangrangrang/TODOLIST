import { Category } from "./classes/category/Category.js";
import { CategoryList } from "./classes/category/CategoryList.js";
import { CategoryListTemplate } from "./classes/Templates/CategoryListTemplate.js";
// 선택자 
const form = document.querySelector(".form-card");
const ul = document.querySelector('ul');
const button = document.querySelector('.deletBtn');
const categoryText = document.querySelector("#category-text");
const categoryList = new CategoryList();
const categoryListTemplate = new CategoryListTemplate(ul);
let categorys = [];
// 등록
form.addEventListener("submit", (e) => {
    // e.preventDefault();
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
if (categorys.length === 0) {
    categoryListTemplate.notPageContainer();
}
else {
    categorys.forEach(function (category, index) {
        categoryListTemplate.addRowToContainer(category, index);
    });
}
