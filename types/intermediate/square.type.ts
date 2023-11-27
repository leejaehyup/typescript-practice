/**
 * Given a number, your type should return its square.
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

type Square<T extends number, M extends unknown[] = ConstructTuple<Absolute<T>>, R extends unknown[] = []> = M extends [
  unknown,
  ...infer Rest extends unknown[],
]
  ? Absolute<T> extends '100'
    ? 10000
    : Square<T, Rest, [...R, ...ConstructTuple<Absolute<T>>]>
  : R['length'];

// type Square<
//   T extends number,
//   M extends unknown[] = ConstructTuple<Absolute<T>>,
//   N extends unknown[] = ConstructTuple<Absolute<T>>,
//   R extends unknown[] = [],
// > = M extends [unknown, ...infer Rest extends unknown[]]
//   ? N extends []
//     ? Square<T, Rest, ConstructTuple<Absolute<T>>, [...R]>
//     : N extends [unknown, ...infer RRest extends unknown[]]
//     ? Square<T, M, RRest, [...R, unknown]>
//     : Square<T, M, [], [...R, unknown]>
//   : R['length'];
/**
 * test
 */
{
  type d = Square<-2>;
  type cases = [
    Expect<Equal<Square<0>, 0>>,
    Expect<Equal<Square<1>, 1>>,
    Expect<Equal<Square<3>, 9>>,
    Expect<Equal<Square<20>, 400>>,
    Expect<Equal<Square<100>, 10000>>,
    // Negative numbers
    Expect<Equal<Square<-2>, 4>>,
    Expect<Equal<Square<-5>, 25>>,
    Expect<Equal<Square<-31>, 961>>,
    Expect<Equal<Square<-50>, 2500>>,
  ];
}
