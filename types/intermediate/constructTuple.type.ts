/**
 * Construct a tuple with a given length.
 *
 * 타입스크립트 재귀는 999번까지 가능
 */

import { Equal, Expect } from 'types/checker.type';

type MakeStringToArray<T extends string, U extends unknown[] = []> = `${U['length']}` extends T
  ? U
  : MakeStringToArray<T, [...U, unknown]>;

type Multiple10<T extends unknown[]> = [...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T, ...T];

type ConstructTuple<
  T extends number,
  S extends string = `${T}`,
  R extends unknown[] = [],
> = S extends `${infer L}${infer Rest}` ? ConstructTuple<T, Rest, [...Multiple10<R>, ...MakeStringToArray<L>]> : R;

/**
 * test
 */
{
  type result = ConstructTuple<2>; // expect to be [unknown, unkonwn]
  type d = ConstructTuple<999>;
  type cases = [
    Expect<Equal<ConstructTuple<0>, []>>,
    Expect<Equal<ConstructTuple<2>, [unknown, unknown]>>,
    Expect<Equal<ConstructTuple<999>['length'], 999>>,
    Expect<Equal<ConstructTuple<1000>['length'], 1000>>,
  ];
}
