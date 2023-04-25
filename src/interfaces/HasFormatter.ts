import { Todo } from "../classes/Todo";

export interface HasFormatter {
  register(obj: Object): void;
  delete(index: number, obj: object): void;
  modify (index:number, obj: object): void;
  listAll(): void;
}