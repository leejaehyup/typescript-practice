/**
 * return true is a number is odd
 */

import { Equal, Expect } from 'types/checker.type';

type MakeArray<T extends number | string, U extends unknown[] = []> = `${U['length']}` extends `${T}`
  ? U
  : MakeArray<T, [...U, unknown]>;

type oddNumber = 1 | 3 | 5 | 7 | 9;

type LastString<S extends string> = S extends `${infer F}${infer L}` ? (L extends '' ? F : LastString<L>) : S;

type IsOdd<T extends number, U extends unknown[] = MakeArray<LastString<`${T}`>>> = U['length'] extends oddNumber
  ? true
  : false;

/**
 * best answer
 */
//   type IsOdd<T extends number> =  `${T}` extends `${number | ''}${1 | 3 | 5 | 7 | 9}` ? true : false;
/**
 * test
 */
{
  type d = IsOdd<2023>;
  type cases = [
    Expect<Equal<IsOdd<2023>, true>>,
    Expect<Equal<IsOdd<1453>, true>>,
    Expect<Equal<IsOdd<1926>, false>>,
    Expect<Equal<IsOdd<number>, false>>,
  ];
}
