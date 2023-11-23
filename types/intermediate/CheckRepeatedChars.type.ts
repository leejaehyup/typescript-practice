/**
 * Implement type CheckRepeatedChars<S> which will return whether type S contains duplicated chars?
 */

import { Equal, Expect } from 'types/checker.type';

type StringToUnion<S extends string, V extends any[] = []> = S extends `${infer First}${infer Rest}`
  ? StringToUnion<Rest, [...V, First]>
  : V[number];

type CheckRepeatedChars<T extends string> = T extends `${infer F}${infer Rest}`
  ? F extends StringToUnion<Rest>
    ? true
    : CheckRepeatedChars<Rest>
  : false;

/**
 * test
 */
{
  type a = CheckRepeatedChars<'abc'>; // false
  type b = CheckRepeatedChars<'aba'>; // true

  type cases = [
    Expect<Equal<CheckRepeatedChars<'abc'>, false>>,
    Expect<Equal<CheckRepeatedChars<'abb'>, true>>,
    Expect<Equal<CheckRepeatedChars<'cbc'>, true>>,
    Expect<Equal<CheckRepeatedChars<''>, false>>,
  ];
}
