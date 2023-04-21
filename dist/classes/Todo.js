export class Todo {
    constructor(category, title, duedate, isDone) {
        this.category = category;
        this.title = title;
        this.duedate = duedate;
        this.isDone = isDone;
    }
    // 날짜 유효성 확인 함수 생성
    day() {
        let result = true;
        try {
            const date = [];
            date[0] = this.duedate.substring(0, 4);
            date[1] = this.duedate.substring(4, 6);
            date[2] = this.duedate.substring(6);
            const y = parseInt(date[0], 10), m = parseInt(date[1], 10), d = parseInt(date[2], 10);
            var dateRegex = /^(?=\d)(?:(?:31(?!.(?:0?[2469]|11))|(?:30|29)(?!.0?2)|29(?=.0?2.(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00)))(?:\x20|$))|(?:2[0-8]|1\d|0?[1-9]))([-.\/])(?:1[012]|0?[1-9])\1(?:1[6-9]|[2-9]\d)?\d\d(?:(?=\x20\d)\x20|$))?(((0?[1-9]|1[012])(:[0-5]\d){0,2}(\x20[AP]M))|([01]\d|2[0-3])(:[0-5]\d){1,2})?$/;
            result = dateRegex.test(d + '-' + m + '-' + y);
            console.log(date[0], date[1], date[2]);
        }
        catch (err) {
            result = false;
        }
        return result;
    }
    ;
}
