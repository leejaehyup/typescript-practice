/**
 * Implement type CheckRepeatedChars<T> which will return whether type T contains duplicated member
 */

import { Equal, Expect } from 'types/checker.type';

type CheckRepeatedTuple<T extends unknown[]> = T extends [infer F, ...infer Rest]
  ? F extends Rest[number]
    ? true
    : CheckRepeatedTuple<Rest>
  : false;

/**
 * test
 */
{
  type a = CheckRepeatedTuple<[1, 2, 3]>; // false
  type b = CheckRepeatedTuple<[1, 2, 1]>; // true

  type cases = [
    Expect<Equal<CheckRepeatedTuple<[number, number, string, boolean]>, true>>,
    Expect<Equal<CheckRepeatedTuple<[number, string]>, false>>,
    Expect<Equal<CheckRepeatedTuple<[1, 2, 3]>, false>>,
    Expect<Equal<CheckRepeatedTuple<[1, 2, 1]>, true>>,
    Expect<Equal<CheckRepeatedTuple<[]>, false>>,
    Expect<Equal<CheckRepeatedTuple<string[]>, false>>,
  ];
}
