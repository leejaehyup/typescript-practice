/**
 * Find the elements in the target array that appear only once.
 * For example：input: [1,2,2,3,3,4,5,6,6,6]，ouput: [1,4,5].
 */

import { Equal, Expect } from 'types/checker.type';

type FindEles<T extends unknown[], R extends unknown[] = [], U extends unknown[] = []> = T extends [
  infer F,
  ...infer Rest,
]
  ? F extends Rest[number] | U[number]
    ? FindEles<Rest, [...R], [...U, F]>
    : FindEles<Rest, [...R, F], [...U]>
  : R;

/**
 * test
 */
{
  type cases = [
    Expect<Equal<FindEles<[1, 2, 2, 3, 3, 4, 5, 6, 6, 6]>, [1, 4, 5]>>,
    Expect<Equal<FindEles<[2, 2, 3, 3, 6, 6, 6]>, []>>,
    Expect<Equal<FindEles<[1, 2, 3]>, [1, 2, 3]>>,
  ];
}
