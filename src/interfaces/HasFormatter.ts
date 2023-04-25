import { Todo } from "../classes/Todo";

export interface HasFormatter {
  register(todo: Todo): void;
  delete(index: number, todo: object): void;
  modify (index:number, todo: object): void;
  listAll(): void;
}