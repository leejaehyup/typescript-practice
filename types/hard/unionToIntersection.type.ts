/**
 * Implement the advanced util type UnionToIntersection<U>
 *
 * keyword
 * https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#type-inference-in-conditional-types
 */

import { Equal, Expect } from 'types/checker.type';

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

/**
 * test
 */
{
  type I = UnionToIntersection<'foo' | 42 | true>; // expected to be 'foo' & 42 & true

  type cases = [
    Expect<Equal<UnionToIntersection<'foo' | 42 | true>, 'foo' & 42 & true>>,
    Expect<Equal<UnionToIntersection<(() => 'foo') | ((i: 42) => true)>, (() => 'foo') & ((i: 42) => true)>>,
  ];
}
