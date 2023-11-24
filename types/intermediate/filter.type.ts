/**
 * Implement the type Filter<T, Predicate> takes an Array T,
 * primitive type or union primitive type Predicate and returns an Array include the elements of Predicate.
 */

import { Equal, Expect } from 'types/checker.type';

type Filter<T, P, R extends unknown[] = []> = T extends [infer F, ...infer Rest]
  ? F extends P
    ? Filter<Rest, P, [...R, F]>
    : Filter<Rest, P, [...R]>
  : R;
/**
 * test
 */
{
  type Falsy = false | 0 | '' | null | undefined;

  type cases = [
    Expect<Equal<Filter<[0, 1, 2], 2>, [2]>>,
    Expect<Equal<Filter<[0, 1, 2], 0 | 1>, [0, 1]>>,
    Expect<Equal<Filter<[0, 1, 2], Falsy>, [0]>>,
  ];
}
