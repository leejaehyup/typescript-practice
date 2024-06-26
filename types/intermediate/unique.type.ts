/**
 * Implement the type version of Lodash.uniq, Unique takes an Array T, returns the Array T without repeated values.
 */

import { Equal, Expect } from 'types/checker.type';

type FindAndRemove<T extends unknown[], U extends unknown, R extends unknown[] = []> = T extends [
  infer F,
  ...infer Rest,
]
  ? Equal<F, U> extends true
    ? FindAndRemove<Rest, U, [...R]>
    : FindAndRemove<Rest, U, [...R, F]>
  : R;

type Unique<T extends unknown[], R extends unknown[] = []> = T extends [infer F, ...infer Rest]
  ? Unique<FindAndRemove<Rest, F>, [...R, F]>
  : R;

/**
 * best answer
 */
type Unique2<T extends unknown[], R extends unknown[] = []> = T extends [infer A, ...infer Rest]
  ? Unique2<Rest, A extends R[number] ? R : [...R, A]>
  : R;

/**
 * test
 */
{
  type Res = Unique<[1, 1, 2, 2, 3, 3]>; // expected to be [1, 2, 3]
  type Res1 = Unique<[1, 2, 3, 4, 4, 5, 6, 7]>; // expected to be [1, 2, 3, 4, 5, 6, 7]
  type Res2 = Unique<[1, 'a', 2, 'b', 2, 'a']>; // expected to be [1, "a", 2, "b"]
  type Res3 = Unique<[string, number, 1, 'a', 1, string, 2, 'b', 2, number]>; // expected to be [string, number, 1, "a", 2, "b"]
  type Res4 = Unique<[unknown, unknown, any, any, never, never]>; // expected to be [unknown, any, never]

  type cases = [
    Expect<Equal<Unique<[1, 1, 2, 2, 3, 3]>, [1, 2, 3]>>,
    Expect<Equal<Unique<[1, 2, 3, 4, 4, 5, 6, 7]>, [1, 2, 3, 4, 5, 6, 7]>>,
    Expect<Equal<Unique<[1, 'a', 2, 'b', 2, 'a']>, [1, 'a', 2, 'b']>>,
    Expect<Equal<Unique<[string, number, 1, 'a', 1, string, 2, 'b', 2, number]>, [string, number, 1, 'a', 2, 'b']>>,
    Expect<Equal<Unique<[unknown, unknown, any, any, never, never]>, [unknown, any, never]>>,
  ];
}
