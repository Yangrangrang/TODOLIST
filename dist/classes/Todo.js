export class Todo {
    constructor(category, title, duedate, isDone) {
        this.category = category;
        this.title = title;
        this.duedate = duedate;
        this.isDone = isDone;
    }
    // 날짜 유효성 확인 함수 생성
    day() {
        return true;
    }
    ;
}
