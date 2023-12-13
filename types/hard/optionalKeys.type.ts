/**
 * Implement the advanced util type OptionalKeys<T>, which picks all the optional keys into a union.
 */

import { Equal, Expect } from 'types/checker.type';

type OptionalKeys<T, K = keyof T> = K extends keyof T ? (T extends Required<Pick<T, K>> ? never : K) : never;

/**
 * test
 */
{
  type rs = OptionalKeys<{ a: number; b?: string }>;
  type cases = [
    Expect<Equal<OptionalKeys<{ a: number; b?: string }>, 'b'>>,
    Expect<Equal<OptionalKeys<{ a: undefined; b?: undefined }>, 'b'>>,
    Expect<Equal<OptionalKeys<{ a: undefined; b?: undefined; c?: string; d?: null }>, 'b' | 'c' | 'd'>>,
    Expect<Equal<OptionalKeys<{}>, never>>,
  ];
}
