/**
 * String#length처럼 동작하는 문자열 리터럴의 길이를 구하세요.
 */

type LengthOfString<
  S extends string,
  T extends string[] = []
> = S extends `${infer F}${infer L}`
  ? LengthOfString<L, [...T, F]>
  : T["length"];

/**
 * test
 */
type expect = LengthOfString<"kumiko">; // 6

const rs: expect = 6;
