/**
 * 튜플 값으로 유니온 타입을 생성하는 제네릭 TupleToUnion<T>를 구현하세요.
 */

import { Equal, Expect } from "types/checker.type";

// type TupleToUnion<T extends unknown[]> = T[number];

type TupleToUnion<T extends unknown[]> = T extends Array<infer U> ? U : never;

/**
 * test
 */
{
  type Arr = ["1", "2", "3"];
  type Test = TupleToUnion<Arr>; // expected to be '1' | '2' | '3'

  type cases = [
    Expect<Equal<TupleToUnion<[123, "456", true]>, 123 | "456" | true>>,
    Expect<Equal<TupleToUnion<[123]>, 123>>
  ];
}
