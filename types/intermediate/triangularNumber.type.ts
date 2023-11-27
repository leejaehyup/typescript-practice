/**
 * Given a number N, find the Nth triangular number, i.e. 1 + 2 + 3 + ... + N
 */

import { Equal, Expect } from 'types/checker.type';

type MakeStringToArray<T extends string, U extends unknown[] = []> = `${U['length']}` extends T
  ? U
  : MakeStringToArray<T, [...U, unknown]>;

type Multiple10<T extends unknown[]> = [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T];

type ConstructTuple<
  T extends number | string,
  S extends string = `${T}`,
  R extends unknown[] = [],
> = S extends `${infer L}${infer Rest}` ? ConstructTuple<T, Rest, [...Multiple10<R>, ...MakeStringToArray<L>]> : R;

type AllSum<T extends number[], U extends unknown[] = []> = T extends [
  infer F extends number,
  ...infer Rest extends number[],
]
  ? AllSum<Rest, [...U, ...ConstructTuple<F>]>
  : U['length'];

type Triangular<T extends number, U extends unknown[] = MakeNumberToArray<T>, R extends number[] = []> = U extends [
  unknown,
  ...infer Rest,
]
  ? Triangular<T, Rest, [...R, U['length']]>
  : AllSum<R>;

/**
 * best answer
 */
// type Triangular<N extends number, P extends number[] = [], A extends number[] = []> = P['length'] extends N
//   ? A['length']
//   : Triangular<N, [0, ...P], [...A, ...P, 0]>;

/**
 * test
 */
{
  type test = Triangular<0>;
  type cases = [
    Expect<Equal<Triangular<0>, 0>>,
    Expect<Equal<Triangular<1>, 1>>,
    Expect<Equal<Triangular<3>, 6>>,
    Expect<Equal<Triangular<10>, 55>>,
    Expect<Equal<Triangular<20>, 210>>,
    Expect<Equal<Triangular<55>, 1540>>,
    Expect<Equal<Triangular<100>, 5050>>,
  ];
}
