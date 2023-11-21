/**
 * Implement the type version of Array.indexOf, indexOf<T, U> takes an Array T, any U and returns the index of the first U in Array T.
 */

import { Equal, Expect } from 'types/checker.type';

type IsEqual<T, U> = U extends T ? (T extends U ? true : false) : false;

type IndexOf<T extends unknown[], U, V extends unknown[] = []> = U extends T[number]
  ? T extends [infer R, ...infer Rest]
    ? IsEqual<U, R> extends true
      ? V['length']
      : IndexOf<Rest, U, [...V, R]>
    : -1
  : -1;

/**
 * test
 */
{
  type Res = IndexOf<[1, 2, 3], 2>; // expected to be 1
  type Res1 = IndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>; // expected to be 2
  type Res2 = IndexOf<[0, 0, 0], 2>; // expected to be -1
  type cases = [
    Expect<Equal<IndexOf<[1, 2, 3], 2>, 1>>,
    Expect<Equal<IndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>, 2>>,
    Expect<Equal<IndexOf<[0, 0, 0], 2>, -1>>,
    Expect<Equal<IndexOf<[string, 1, number, 'a'], number>, 2>>,
    Expect<Equal<IndexOf<[string, 1, number, 'a', any], any>, 4>>,
    Expect<Equal<IndexOf<[string, 'a'], 'a'>, 1>>,
    Expect<Equal<IndexOf<[any, 1], 1>, 1>>,
  ];
}
