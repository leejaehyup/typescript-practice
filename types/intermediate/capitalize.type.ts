/**
 * 문자열의 첫 글자만 대문자로 바꾸고 나머지는 그대로 놔두는 Capitalize<T>를 구현하세요.
 */

type _Capitalize<T> = T extends `${infer U}${infer _}`
  ? `${Uppercase<U>}${_}`
  : T;

/**
 * test
 */
{
  type capitalized = _Capitalize<"hello world">; // expected to be 'Hello world'
  const rs: capitalized = "Hello world";
}
