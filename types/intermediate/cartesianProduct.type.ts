/**
 * Given 2 sets (unions), return its Cartesian product in a set of tuples,
 */

import { Equal, Expect } from 'types/checker.type';

type CartesianProduct<T, U> = T extends T ? (U extends U ? [T, U] : never) : never;

/**
 * test
 */
{
  type test = CartesianProduct<1 | 2, 'a' | 'b'>;
  type cases = [
    Expect<Equal<CartesianProduct<1 | 2, 'a' | 'b'>, [2, 'a'] | [1, 'a'] | [2, 'b'] | [1, 'b']>>,
    Expect<
      Equal<
        CartesianProduct<1 | 2 | 3, 'a' | 'b' | 'c'>,
        [2, 'a'] | [1, 'a'] | [3, 'a'] | [2, 'b'] | [1, 'b'] | [3, 'b'] | [2, 'c'] | [1, 'c'] | [3, 'c']
      >
    >,
    Expect<Equal<CartesianProduct<1 | 2, 'a' | never>, [2, 'a'] | [1, 'a']>>,
    Expect<Equal<CartesianProduct<'a', Function | string>, ['a', Function] | ['a', string]>>,
  ];

  // [1, 'a'] | [2, 'a'] | [1, 'b'] | [2, 'b']
}
