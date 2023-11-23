/**
 * Please complete type Integer<T>, type T inherits from number, if T is an integer return it, otherwise return never.
 */

import { Equal, Expect } from 'types/checker.type';

// type Integer<T extends number> = number extends T
//   ? never
//   : `${T}` extends `${infer R}.${infer L}`
//   ? R extends '0'
//     ? never
//     : L extends '0'
//     ? T
//     : never
//   : T;

/**
 * best answer
 */
type Integer<T extends number> = `${T}` extends `${bigint}` ? T : never;

// type Integer<T extends number> = number extends T ? never : `${T}` extends `${string}.${string}` ? never : T;
/**
 * test
 */
{
  let x = 1;
  let y = 1 as const;

  type cases1 = [
    Expect<Equal<Integer<1>, 1>>,
    Expect<Equal<Integer<1.1>, never>>,
    Expect<Equal<Integer<1.0>, 1>>,
    Expect<Equal<Integer<1.0>, 1>>,
    Expect<Equal<Integer<0.5>, never>>,
    Expect<Equal<Integer<28.0>, 28>>,
    Expect<Equal<Integer<28.101>, never>>,
    Expect<Equal<Integer<typeof x>, never>>,
    Expect<Equal<Integer<typeof y>, 1>>,
  ];
}
