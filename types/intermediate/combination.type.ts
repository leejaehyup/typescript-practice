/**
 * Given an array of strings, do Permutation & Combination. It's also useful for the prop types like video
 */

import { Equal, Expect } from 'types/checker.type';

type Combination<T extends string[], R = T[number], U = R> = U extends string
  ? U | `${U} ${Combination<[], Exclude<R, U>>}`
  : never;

/**
 * best answer
 */

type Combination2<T extends string[], A = T[number], U = A> = U extends string
  ? U | `${U} ${Combination2<T, Exclude<A, U>>}`
  : never;

/**
 * test
 */
{
  // expected to be `"foo" | "bar" | "baz" | "foo bar" | "foo bar baz" | "foo baz" | "foo baz bar" | "bar foo" | "bar foo baz" | "bar baz" | "bar baz foo" | "baz foo" | "baz foo bar" | "baz bar" | "baz bar foo"`
  type Keys = Combination<['foo', 'bar', 'baz']>;
  type cases = [
    Expect<
      Equal<
        Combination<['foo', 'bar', 'baz']>,
        | 'foo'
        | 'bar'
        | 'baz'
        | 'foo bar'
        | 'foo bar baz'
        | 'foo baz'
        | 'foo baz bar'
        | 'bar foo'
        | 'bar foo baz'
        | 'bar baz'
        | 'bar baz foo'
        | 'baz foo'
        | 'baz foo bar'
        | 'baz bar'
        | 'baz bar foo'
      >
    >,
  ];
}
