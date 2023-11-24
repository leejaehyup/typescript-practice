/**
 * Given a generic tuple type T extends unknown[], write a type which produces all permutations of T as a union
 */

import { Equal, Expect, ExpectFalse } from 'types/checker.type';

type PermutationsOfTuple<T extends unknown[]> = T extends [infer F, ...infer Rest, infer L]
  ?
      | [F, ...PermutationsOfTuple<Rest>, L]
      | [L, ...PermutationsOfTuple<Rest>, F]
      | [F, L, ...PermutationsOfTuple<Rest>]
      | [L, F, ...PermutationsOfTuple<Rest>]
      | [...PermutationsOfTuple<Rest>, F, L]
      | [...PermutationsOfTuple<Rest>, L, F]
  : T;

/**
 * test
 */
{
  type test = PermutationsOfTuple<[1, number, unknown, 2]>;
  type test2 = PermutationsOfTuple<[any, unknown]>;
  /**
   * Should return:
   * | [1, number, unknown]
   * | [1, unknown, number]
   * | [number, 1, unknown]
   * | [unknown, 1, number]
   * | [number, unknown, 1]
   * | [unknown, number ,1]
   */

  type cases = [
    Expect<Equal<PermutationsOfTuple<[]>, []>>,
    Expect<Equal<PermutationsOfTuple<[any]>, [any]>>,
    Expect<Equal<PermutationsOfTuple<[any, unknown]>, [any, unknown] | [unknown, any]>>,
    Expect<
      Equal<
        PermutationsOfTuple<[any, unknown, never]>,
        | [any, unknown, never]
        | [unknown, any, never]
        | [unknown, never, any]
        | [any, never, unknown]
        | [never, any, unknown]
        | [never, unknown, any]
      >
    >,
    Expect<
      Equal<
        PermutationsOfTuple<[1, number, unknown]>,
        | [1, number, unknown]
        | [1, unknown, number]
        | [number, 1, unknown]
        | [unknown, 1, number]
        | [number, unknown, 1]
        | [unknown, number, 1]
      >
    >,
    ExpectFalse<Equal<PermutationsOfTuple<[1, number, unknown]>, [unknown]>>,
  ];
}
