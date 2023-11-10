/**
 * T에서 K 프로퍼티만 읽기 전용으로 설정해 새로운 오브젝트 타입을 만드는 제네릭 MyReadonly2<T, K>를 구현하세요.
 * K가 주어지지 않으면 단순히 Readonly<T>처럼 모든 프로퍼티를 읽기 전용으로 설정해야 합니다.
 */

import { Alike, Equal, Expect } from "types/checker.type";

type MyReadonly2<T, K extends keyof T> = {
  readonly [key in keyof T as key extends K ? key : never]: T[key];
} & {
  [key in keyof T as key extends K ? never : key]: T[key];
};
// Pick, Readonly, Omit 유틸타입으로도 구현 가능

/**
 * test
 */
{
  interface Todo {
    title: string;
    description: string;
    completed: boolean;
  }

  const todo: MyReadonly2<Todo, "title" | "description"> = {
    title: "Hey",
    description: "foobar",
    completed: false,
  };

  //   todo.title = "Hello"; // Error: cannot reassign a readonly property
  //   todo.description = "barFoo"; // Error: cannot reassign a readonly property
  todo.completed = true; // OK

  type cases = [
    Expect<Alike<MyReadonly2<Todo1, "title" | "description">, Expected>>,
    Expect<Alike<MyReadonly2<Todo2, "title" | "description">, Expected>>,
    Expect<Alike<MyReadonly2<Todo2, "description">, Expected>>
  ];
}

interface Todo1 {
  title: string;
  description?: string;
  completed: boolean;
}

interface Todo2 {
  readonly title: string;
  description?: string;
  completed: boolean;
}

interface Expected {
  readonly title: string;
  readonly description?: string;
  completed: boolean;
}
