/**
 * 정확한 문자열 타입이고 끝부분의 공백이 제거된 새 문자열을 반환하는 Trim<T>를 구현하십시오.
 */

import { Equal, Expect } from 'types/checker.type';

type StringToArray<T extends string, U extends unknown[] = []> = T extends `${infer B}${infer C}`
  ? StringToArray<C, [...U, B]>
  : U;

type ArrayToString<T extends unknown[], U extends string = ''> = T extends [infer F, ...infer Rest]
  ? F extends string
    ? ArrayToString<Rest, `${U}${F}`>
    : ArrayToString<Rest, `${U}`>
  : U;

type TrimRight<T extends string> = StringToArray<T> extends [...infer Rest, infer L]
  ? L extends isSpace
    ? TrimRight<ArrayToString<Rest>>
    : T
  : T;

type isSpace = ' ' | '\n' | '\t';

/**
 * best answer
 */
type TrimRight2<S extends string> = S extends `${infer Left}${isSpace}` ? TrimRight<Left> : S;
/**
 * test
 */
{
  type Trimed = TrimRight<'   Hello World    '>; // 기대되는 결과는 '   Hello World'입니다.
  type cases = [
    Expect<Equal<TrimRight<'str'>, 'str'>>,
    Expect<Equal<TrimRight<'str '>, 'str'>>,
    Expect<Equal<TrimRight<'str     '>, 'str'>>,
    Expect<Equal<TrimRight<'     str     '>, '     str'>>,
    Expect<Equal<TrimRight<'   foo bar  \n\t '>, '   foo bar'>>,
    Expect<Equal<TrimRight<''>, ''>>,
    Expect<Equal<TrimRight<'\n\t '>, ''>>,
  ];
}
