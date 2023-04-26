import { Todo } from "../classes/todo/Todo";

export interface HasFormatter {
  register(obj: Object): void;
  delete(index: number, obj: object): void;
  modify (index:number, obj: object): void;
  listAll(): void;
}