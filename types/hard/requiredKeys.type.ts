/**
 * Implement the advanced util type RequiredKeys<T>, which picks all the required keys into a union.
 */

import { Equal, Expect } from 'types/checker.type';

// type UnionToIntersection<U> = (U extends never ? never : (arg: U) => never) extends (arg: infer I) => void ? I : never;

// type UnionToTuple<T> = UnionToIntersection<T extends never ? never : (t: T) => T> extends (_: never) => infer W
//   ? [...UnionToTuple<Exclude<T, W>>, W]
//   : [];

// type RequiredKeys<T extends object, U = UnionToTuple<keyof T>, R extends unknown[] = []> = U extends [
//   infer F extends keyof T,
//   ...infer Rest,
// ]
//   ? T[F] extends Required<T>[F]
//     ? RequiredKeys<T, Rest, [...R, F]>
//     : RequiredKeys<T, Rest, [...R]>
//   : R[number];

/**
 * best answer
 */
type RequiredKeys<T, K = keyof T> = K extends keyof T ? (T extends Required<Pick<T, K>> ? K : never) : never;

/**
 * test
 */
{
  type Result = RequiredKeys<{ foo: number; bar?: string }>;
  // expected to be “foo”
  type cases = [
    Expect<Equal<RequiredKeys<{ a: number; b?: string }>, 'a'>>,
    Expect<Equal<RequiredKeys<{ a: undefined; b?: undefined }>, 'a'>>,
    Expect<Equal<RequiredKeys<{ a: undefined; b?: undefined; c: string; d: null }>, 'a' | 'c' | 'd'>>,
    Expect<Equal<RequiredKeys<{}>, never>>,
  ];
}
