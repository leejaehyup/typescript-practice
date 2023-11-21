/**
 * Implement the type version of Array.join,
 * Join<T, U> takes an Array T, string or number U and returns the Array T with U stitching up.
 */

import { Equal, Expect } from 'types/checker.type';

type Join<T extends unknown[], U extends string | number> = T extends [infer F extends string, ...infer Rest]
  ? Rest['length'] extends 0
    ? `${F}`
    : `${F}${U}${Join<Rest, U>}`
  : '';

/**
 * best answer
 */
type Join2<T extends any[], U extends string | number> = T extends [infer F, ...infer R]
  ? R['length'] extends 0
    ? `${F & string}`
    : `${F & string}${U}${Join2<R, U>}`
  : never;

/**
 * test
 */
{
  type Res = Join<['a', 'p', 'p', 'l', 'e'], '-'>; // expected to be 'a-p-p-l-e'
  type Res1 = Join<['Hello', 'World'], ' '>; // expected to be 'Hello World'
  type Res2 = Join<['2', '2', '2'], 1>; // expected to be '21212'
  type Res3 = Join<['o'], 'u'>; // expected to be 'o'

  type cases = [
    Expect<Equal<Join<['a', 'p', 'p', 'l', 'e'], '-'>, 'a-p-p-l-e'>>,
    Expect<Equal<Join<['Hello', 'World'], ' '>, 'Hello World'>>,
    Expect<Equal<Join<['2', '2', '2'], 1>, '21212'>>,
    Expect<Equal<Join<['o'], 'u'>, 'o'>>,
    Expect<Equal<Join<[], 'u'>, ''>>,
  ];
}
