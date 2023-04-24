export class Todo {
    constructor(category, title, duedate, isDone) {
        this.category = category;
        this.title = title;
        this.duedate = duedate;
        this.isDone = isDone;
        var categoryLists;
        (function (categoryLists) {
            categoryLists["bucket"] = "\uBC84\uD0B7\uB9AC\uC2A4\uD2B8";
            categoryLists["study"] = "\uACF5\uBD80";
            categoryLists["exe"] = "\uC6B4\uB3D9";
            categoryLists["works"] = "\uC5C5\uBB34";
            categoryLists["etc"] = "\uAE30\uD0C0";
        })(categoryLists || (categoryLists = {}));
        if (this.category === '0') {
            this.category = categoryLists.bucket;
        }
        else if (this.category === '1') {
            this.category = categoryLists.study;
        }
        else if (this.category === '2') {
            this.category = categoryLists.exe;
        }
        else if (this.category === '3') {
            this.category = categoryLists.works;
        }
        else if (this.category === '4') {
            this.category = categoryLists.etc;
        }
    }
}
