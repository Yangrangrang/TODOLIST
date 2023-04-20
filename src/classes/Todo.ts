import { HasFormatter } from "../interfaces/HasFormatter";

export class Todo{
  constructor(
    private category: string,
    private title: string,
    private duedate:string, 
    private isDone: boolean,
  ){}

  // constructor(
  //   category: string,
  //   title: string, 
  //   duedate:string, 
  //   isDone: boolean, 
  //   ){
  //     this.category = category;
  //     this.title = title;
  //     this.duedate = duedate;
  //     this.isDone = isDone;

  //   }
}