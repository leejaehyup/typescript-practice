/**
 * Get the middle element of the array by implementing a GetMiddleElement method, represented by an array
 * If the length of the array is odd, return the middle element If the length of the array is even, return the middle two elements
 */

import { Equal, Expect } from 'types/checker.type';

type GetMiddleElement<T extends unknown[]> = T['length'] extends 1 | 2
  ? T
  : T extends [unknown, ...infer Rest, unknown]
  ? GetMiddleElement<Rest>
  : [];

/**
 * test
 */
{
  type simple1 = GetMiddleElement<[1, 2]>; // expected to be [3]
  type simple2 = GetMiddleElement<[() => string]>; // expected to be [3, 4]
  type cases = [
    Expect<Equal<GetMiddleElement<[]>, []>>,
    Expect<Equal<GetMiddleElement<[1, 2, 3, 4, 5]>, [3]>>,
    Expect<Equal<GetMiddleElement<[1, 2, 3, 4, 5, 6]>, [3, 4]>>,
    Expect<Equal<GetMiddleElement<[() => string]>, [() => string]>>,
    Expect<Equal<GetMiddleElement<[() => number, '3', [3, 4], 5]>, ['3', [3, 4]]>>,
    Expect<Equal<GetMiddleElement<[() => string, () => number]>, [() => string, () => number]>>,
    Expect<Equal<GetMiddleElement<[never]>, [never]>>,
  ];
}
