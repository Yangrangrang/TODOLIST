export class TodoTemplate {
    constructor(selectContainer) {
        this.selectContainer = selectContainer;
    }
    categoryListContainer(category, index) {
        const option = document.createElement('option');
        option.value = category.categoryName;
        option.text = category.categoryName;
        this.selectContainer.append(option);
    }
    notCategoryListContainer() {
        const option = document.createElement('option');
        // option.value = "카테고리 없음"
        option.text = "카테고리 없음";
        this.selectContainer.append(option);
    }
}
