/**
 * number, string, 혹은 bigint을 받는 Absolute 타입을 만드세요. 출력은 양수 문자열이어야 합니다.
 */

// type Absolute<T extends number | string | bigint> = T extends number | bigint
//   ? `${T}` extends `${infer R}${infer G}`
//     ? R extends "-"
//       ? G
//       : `${R}${G}`
//     : T
//   : T extends `${infer R}${infer G}`
//   ? R extends "-"
//     ? G
//     : `${R}${G}`
//   : T;
type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer U}`
  ? U
  : `${T}`;
/**
 * type
 */
{
  type Test = -100;
  type Result = Absolute<Test>; // expected to be "100"
  const rs: Result = "100";
}
