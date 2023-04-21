import { TodoList } from "./TodoList.js";
import { Todo } from "./Todo.js";

export class ListTemplate {
  listmodify = new TodoList();

  constructor(
    // public todo: Todo[],

    // 생성자 (ul)
    public container : HTMLUListElement,
  ){}

  // 데이터가 없을때 나오는 렌딩페이지
  notPage (){
    // console.log("페이지 없음");
    const li = document.createElement('li');
    const h4 = document.createElement('h4');

    h4.innerHTML = "todo 리스트를 추가 해주세요";

    li.append(h4);

    this.container.append(li);
  }

  addRowToContainer(todo : Todo, index:number) {
    const li = document.createElement('li');
    const p = document.createElement('p');

    const div = document.createElement('div');
    div.className = "text";
    const span = document.createElement('span');
    const span2 = document.createElement('span');

    // 완료 미완료 radio버튼 추가
    const form = document.createElement('form');

    const label1 = document.createElement('label');
    const input1 = document.createElement('input');
    input1.type="radio";
    input1.name="check";
    input1.value="false";
    label1.append("미완료");

    const label2 = document.createElement('label');
    const input2 = document.createElement('input');
    input2.type="radio";
    input2.name="check";
    input2.value="true";
    label2.append("완료");

    // 클릭이벤트 완료건은 style 파란색 > 초록색 
    if (todo.isDone){
      div.style.color = "green";
      input2.checked = true;
    } else {
      div.style.color = "blue";
      input1.checked = true;
    }

    // text내용 입력
    p.innerText = todo.category;
    span.innerText = todo.title;
    span2.innerText = "완료 예정일 : " + todo.duedate;
    
    div.appendChild(span);
    div.appendChild(span2);

    form.appendChild(input1);
    form.appendChild(label1);
    form.appendChild(input2);
    form.appendChild(label2);

    // 클릭 시 완료 / 미완료 변경 이벤트
    input1.addEventListener("click", (e:Event)=> {
      div.style.color = "blue";
      this.listmodify.modifyF(index);
    })

    input2.addEventListener("click", (e: Event)=>{
      div.style.color = "green";
      this.listmodify.modifyT(index);
    })

    // 삭제 버튼 추가 , 클릭 시 삭제
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = "삭제하기"

    deleteBtn.addEventListener("click", (e:Event)=> {
      // console.log("test");
      this.listmodify.delete(index);
      location.reload();
    })

    li.append(p);
    li.append(div);
    li.append(form);
    li.append(deleteBtn);

    this.container.append(li);
  }

  // bindEvents (todo : Todo, index : number) {
    
  // }
  
 

  // 등록 이벤트 되었을 때 List render
  render (todo : Todo, index: number) {

    this.addRowToContainer(todo, index);
    // this.bindEvents(todo,index);
    
  }
}