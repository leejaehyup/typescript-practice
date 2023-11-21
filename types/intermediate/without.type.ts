/**
 * Implement the type version of Lodash.without, Without<T, U> takes an Array T, number or array U and returns an Array without the elements of U.
 */

import { Equal, Expect } from 'types/checker.type';

type ReturnArray<T> = T extends unknown[] ? T : [T];

type Without<T, U extends unknown[] | number> = T extends [infer F, ...infer Rest]
  ? F extends ReturnArray<U>[number]
    ? Without<Rest, U>
    : [F, ...Without<Rest, U>]
  : [];

/**
 * test
 */
{
  type Res = Without<[1, 2], 1>; // expected to be [2]
  type Res1 = Without<[1, 2, 4, 1, 5], [1, 2]>; // expected to be [4, 5]
  type Res2 = Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>; // expected to be []

  type cases = [
    Expect<Equal<Without<[1, 2], 1>, [2]>>,
    Expect<Equal<Without<[1, 2, 4, 1, 5], [1, 2]>, [4, 5]>>,
    Expect<Equal<Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>, []>>,
  ];
}
