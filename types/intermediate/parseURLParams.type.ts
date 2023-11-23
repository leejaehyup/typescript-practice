/**
 * You're required to implement a type-level parser to parse URL params string into an Union.
 */

import { Equal, Expect } from 'types/checker.type';

type SplitString<
  S extends string,
  D extends string,
  B extends string = '',
  U extends unknown[] = [],
> = S extends `${infer F}${infer Rest}`
  ? F extends D
    ? SplitString<Rest, D, '', [...U, B]>
    : SplitString<Rest, D, `${B}${F}`, [...U]>
  : [...U, B];

type ParseUrlParams<T extends string, U extends string[] = SplitString<T, '/'>, R extends unknown[] = []> = U extends [
  infer F extends string,
  ...infer Rest extends string[],
]
  ? F extends `:${infer SS}`
    ? ParseUrlParams<T, [...Rest], [...R, SS]>
    : ParseUrlParams<T, [...Rest], [...R]>
  : R[number];

/**
 * test
 */
{
  type a = ParseUrlParams<':id'>; // id
  type b = ParseUrlParams<'posts/:id'>; // id
  type c = ParseUrlParams<'posts/:id/:user'>; // id | user
  type cases = [
    Expect<Equal<ParseUrlParams<''>, never>>,
    Expect<Equal<ParseUrlParams<':id'>, 'id'>>,
    Expect<Equal<ParseUrlParams<'posts/:id'>, 'id'>>,
    Expect<Equal<ParseUrlParams<'posts/:id/'>, 'id'>>,
    Expect<Equal<ParseUrlParams<'posts/:id/:user'>, 'id' | 'user'>>,
    Expect<Equal<ParseUrlParams<'posts/:id/:user/like'>, 'id' | 'user'>>,
  ];
}
