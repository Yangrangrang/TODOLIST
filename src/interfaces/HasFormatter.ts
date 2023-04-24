import { Todo } from "../classes/Todo";

export interface HasFormatter {
  register(todo: Todo): void;
  delete(index: number): void;
  // modifyF(index: number): void;
  // modifyT(index: number): void;
  modify (index:number, todo: object): void;
  listAll(): void;
}