/**
 * Implement the type version of Array.lastIndexOf,
 * LastIndexOf<T, U> takes an Array T, any U and returns the index of the last U in Array T
 */

import { Equal, Expect } from 'types/checker.type';

type LastIndexOf<T extends unknown[], U extends unknown> = T extends [...infer Rest, infer L]
  ? Equal<L, U> extends true
    ? Rest['length']
    : LastIndexOf<Rest, U>
  : -1;

/**
 * test
 */
{
  type Res1 = LastIndexOf<[1, 2, 3, 2, 1], 2>; // 3
  type Res2 = LastIndexOf<[0, 0, 0], 2>; // -1

  type cases = [
    Expect<Equal<LastIndexOf<[1, 2, 3, 2, 1], 2>, 3>>,
    Expect<Equal<LastIndexOf<[2, 6, 3, 8, 4, 1, 7, 3, 9], 3>, 7>>,
    Expect<Equal<LastIndexOf<[0, 0, 0], 2>, -1>>,
    Expect<Equal<LastIndexOf<[string, 2, number, 'a', number, 1], number>, 4>>,
    Expect<Equal<LastIndexOf<[string, any, 1, number, 'a', any, 1], any>, 5>>,
  ];
}
