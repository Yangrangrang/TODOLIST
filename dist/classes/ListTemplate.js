export class ListTemplate {
    constructor(
    // public todo: Todo[],
    // 생성자 (ul)
    container) {
        this.container = container;
    }
    // 데이터가 없을때 나오는 렌딩페이지
    notPage() {
        // console.log("페이지 없음");
        const li = document.createElement('li');
        const h4 = document.createElement('h4');
        h4.innerHTML = "todo 리스트를 추가 해주세요";
        li.append(h4);
        this.container.append(li);
    }
    // 등록 이벤트 되었을 때 List render
    render(todo, index) {
        const li = document.createElement('li');
        const p = document.createElement('p');
        const div = document.createElement('div');
        div.className = "text";
        const span = document.createElement('span');
        const span2 = document.createElement('span');
        // 완료 미완료 radio버튼 추가
        const div2 = document.createElement('div');
        const label1 = document.createElement('label');
        const input1 = document.createElement('input');
        input1.type = "radio";
        input1.name = "check";
        input1.value = "false";
        label1.append("미완료");
        const label2 = document.createElement('label');
        const input2 = document.createElement('input');
        input2.type = "radio";
        input2.name = "check";
        input2.value = "true";
        label2.append("완료");
        p.innerText = todo.category;
        span.innerText = todo.title;
        span2.innerText = "완료 예정일 : " + todo.duedate;
        div.appendChild(span);
        div.appendChild(span2);
        div2.appendChild(input1);
        div2.appendChild(label1);
        div2.appendChild(input2);
        div2.appendChild(label2);
        li.append(p);
        li.append(div);
        li.append(div2);
        this.container.append(li);
    }
}
