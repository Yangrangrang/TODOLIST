import { Todo } from "../classes/Todo";

export interface HasFormatter {
  register(todo: Todo): void;
  delete(index: number): void;
  listAll(): void;
}