import { categoryItem } from "./CategoryItem";
// import { v4 as uuidv4 } from 'uuid';

export class Category implements categoryItem{
  constructor(
    public id : number,
    public categoryName : string,
  ){}

  // 카테고리 길이 제한, id 확인 함수
  checkValue(categoryList : Category){
    if (this.categoryName.length < 10) {
      return true;
    } 
  }

  // 카테고리 중복 확인

  // 최종 저장 함수
  addItem(category : Category) : boolean{
    if (this.checkValue(category)){
      return true;
    }
    return false;
  }

  addIndex(index : number){
    
  }
  

  }

  
  
  