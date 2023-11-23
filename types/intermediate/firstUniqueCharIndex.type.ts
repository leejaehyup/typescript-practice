/**
 * Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.
 */

import { Equal, Expect } from 'types/checker.type';

type StringToUnion<S extends string, V extends any[] = []> = S extends `${infer First}${infer Rest}`
  ? StringToUnion<Rest, [...V, First]>
  : V[number];

type FirstUniqueCharIndex<S extends string, T extends unknown[] = []> = S extends `${infer F}${infer Rest}`
  ? F extends StringToUnion<Rest> | T[number]
    ? FirstUniqueCharIndex<Rest, [...T, F]>
    : T['length']
  : -1;

/**
 * test
 */
{
  type cases = [
    Expect<Equal<FirstUniqueCharIndex<'leetcode'>, 0>>,
    Expect<Equal<FirstUniqueCharIndex<'loveleetcode'>, 2>>,
    Expect<Equal<FirstUniqueCharIndex<'aabb'>, -1>>,
    Expect<Equal<FirstUniqueCharIndex<''>, -1>>,
    Expect<Equal<FirstUniqueCharIndex<'aaa'>, -1>>,
  ];
}
