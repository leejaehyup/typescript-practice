/**
 * 문자열 인수를 입력받는 String to Union 유형을 구현하세요. 출력은 입력 문자열의 Union type이어야 합니다.
 */

import { Equal, Expect } from 'types/checker.type';

type StringToUnion<S extends string, V extends any[] = []> = S extends `${infer First}${infer Rest}`
  ? StringToUnion<Rest, [...V, First]>
  : V[number];

/**
 * test
 */
{
  type Test = '123';
  type Result = StringToUnion<Test>; // expected to be "1" | "2" | "3"
  const rs: Result = '1';
  type cases = [
    Expect<Equal<StringToUnion<''>, never>>,
    Expect<Equal<StringToUnion<'t'>, 't'>>,
    Expect<Equal<StringToUnion<'AAA'>, 'A'>>,
    Expect<Equal<StringToUnion<'hello'>, 'h' | 'e' | 'l' | 'l' | 'o'>>,
    Expect<Equal<StringToUnion<'coronavirus'>, 'c' | 'o' | 'r' | 'o' | 'n' | 'a' | 'v' | 'i' | 'r' | 'u' | 's'>>,
  ];
}
