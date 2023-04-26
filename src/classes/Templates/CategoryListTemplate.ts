import { Category } from "../category/Category.js";
import { CategoryList } from "../category/CategoryList.js";

export class CategoryListTemplate {
  categoryList = new CategoryList();

  constructor(
    public container : HTMLUListElement,
  ){}

  addRowToContainer(category : Category, index: number){
    const li = document.createElement('li');
    const span = document.createElement('span');

    span.innerText = category.categoryName;

    // 삭제 버튼 추가 , 클릭 시 삭제
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = "삭제하기"
    deleteBtn.className = "deletBtn"

    deleteBtn.addEventListener("click", (e:Event)=> {
      this.categoryList.delete(index, category);
      location.reload();
    })

    li.append(span);
    li.append(deleteBtn);

    this.container.append(li);
  }

  notPageContainer(){
    const li = document.createElement('li');
    const span = document.createElement('span');

    span.innerText = "카테고리가 없습니다";

    li.append(span);

    this.container.append(li);
  }
}