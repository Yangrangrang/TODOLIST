import { HasFormatter } from "../interfaces/HasFormatter";

export class Todo{
  constructor(
    public category: string,
    public title: string,
    public duedate:string, 
    public isDone: boolean,
  ){}

  // 날짜 유효성 확인 함수 생성
  day(): boolean {
    return true;
  };

}