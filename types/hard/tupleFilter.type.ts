/**
 * Implement a type FilterOut<T, F> that filters out items of the given type F from the tuple T.
 *
 * keyword
 * Distributive Conditional Types
 */

import { Equal, Expect } from 'types/checker.type';
type FilterOut<T extends any[], F, R extends unknown[] = []> = T extends [infer V, ...infer Rest]
  ? [V] extends [F]
    ? FilterOut<Rest, F, [...R]>
    : FilterOut<Rest, F, [...R, V]>
  : R;

/**
 * test
 */
{
  type Filtered = FilterOut<[1, 2, null, 3], null>; // [1, 2, 3]
  type Filtered2 = FilterOut<[never, 1, 'a', undefined, false, null], never | null | undefined>; // []
  type cases = [
    Expect<Equal<FilterOut<[], never>, []>>,
    Expect<Equal<FilterOut<[never], never>, []>>,
    Expect<Equal<FilterOut<['a', never], never>, ['a']>>,
    Expect<Equal<FilterOut<[1, never, 'a'], never>, [1, 'a']>>,
    Expect<Equal<FilterOut<[never, 1, 'a', undefined, false, null], never | null | undefined>, [1, 'a', false]>>,
    Expect<Equal<FilterOut<[number | null | undefined, never], never | null | undefined>, [number | null | undefined]>>,
  ];
}
