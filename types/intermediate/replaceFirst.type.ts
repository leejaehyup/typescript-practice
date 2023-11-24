/**
 * Implement the type ReplaceFirst<T, S, R> which will replace the first occurrence of S in a tuple T with R. If no such S exists in T,
 * the result should be T.
 */

import { Equal, Expect } from 'types/checker.type';

type ReplaceFirst<T extends unknown[], S extends unknown, R extends unknown, V extends unknown[] = []> = T extends [
  infer F,
  ...infer Rest,
]
  ? F extends S
    ? ReplaceFirst<Rest, never, R, [...V, R]>
    : ReplaceFirst<Rest, S, R, [...V, F]>
  : V;

/**
 * test
 */
{
  type test = ReplaceFirst<[true, true, true], 3, 4>;
  type cases = [
    Expect<Equal<ReplaceFirst<[1, 2, 3], 3, 4>, [1, 2, 4]>>,
    Expect<Equal<ReplaceFirst<['A', 'B', 'C'], 'C', 'D'>, ['A', 'B', 'D']>>,
    Expect<Equal<ReplaceFirst<[true, true, true], true, false>, [false, true, true]>>,
    Expect<Equal<ReplaceFirst<[string, boolean, number], boolean, string>, [string, string, number]>>,
    Expect<Equal<ReplaceFirst<[1, 'two', 3], string, 2>, [1, 2, 3]>>,
    Expect<Equal<ReplaceFirst<['six', 'eight', 'ten'], 'eleven', 'twelve'>, ['six', 'eight', 'ten']>>,
  ];
}
