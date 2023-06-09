// import { v4 as uuidv4 } from 'uuid';
export class Category {
    constructor(id, categoryName) {
        this.id = id;
        this.categoryName = categoryName;
    }
}
// export class Validator {
//   category()
// }
export class CheckValid {
    // 카테고리 길이 제한, 공백 제외
    checkValue(category) {
        if (category.categoryName.length > 10) {
            return false;
        }
        if (category.categoryName.length === 0) {
            return false;
        }
        let result = true;
        return result;
    }
    ;
    // 카테고리 중복 확인
    checkDuplicateCategories(category, categoryList) {
        let result = true;
        for (const nowcategory of categoryList) {
            if (category.categoryName === nowcategory.categoryName) {
                return false;
            }
        }
        return result;
    }
    // 최종 저장 함수
    addItem(category, categoryList) {
        if (this.checkValue(category) && this.checkDuplicateCategories(category, categoryList)) {
            return true;
        }
        return false;
    }
}
export class DeleteFunc {
    checkDeleteList(category, todoList) {
        for (const todo of todoList) {
            if (category.categoryName === todo.title) {
                return false;
            }
        }
        return true;
    }
}
