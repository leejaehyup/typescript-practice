/**
 * Given a pattern string P and a text string T,
 * implement the type FindAll<T, P> that returns an Array that contains all indices (0-indexed) from T where P matches.
 */

import { Equal, Expect } from 'types/checker.type';

type FindAll<T extends string, P extends string, S extends unknown[] = [], R extends unknown[] = []> = P extends ''
  ? []
  : T extends `${infer _}${infer Rest}`
  ? T extends `${P}${infer _}`
    ? FindAll<`${Rest}`, P, [...S, unknown], [...R, S['length']]>
    : FindAll<`${Rest}`, P, [...S, unknown], [...R]>
  : R;

/**
 * test
 */
{
  type test = FindAll<'Collection of TypeScript type challenges', 'Type'>;
  type d = FindAll<'AAAA', 'AA'>;
  type cases = [
    Expect<Equal<FindAll<'Collection of TypeScript type challenges', 'Type'>, [14]>>,
    Expect<Equal<FindAll<'Collection of TypeScript type challenges', 'pe'>, [16, 27]>>,
    Expect<Equal<FindAll<'Collection of TypeScript type challenges', ''>, []>>,
    Expect<Equal<FindAll<'', 'Type'>, []>>,
    Expect<Equal<FindAll<'', ''>, []>>,
    Expect<Equal<FindAll<'AAAA', 'A'>, [0, 1, 2, 3]>>,
    Expect<Equal<FindAll<'AAAA', 'AA'>, [0, 1, 2]>>,
  ];
}
