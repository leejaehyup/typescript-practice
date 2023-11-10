/**
 * JavaScript의 Array.includes 함수를 타입 시스템에서 구현하세요. 타입은 두 인수를 받고, true 또는 false를 반환해야 합니다.
 */

type Includes<T extends unknown[], S extends unknown> = S extends T[number]
  ? true
  : false;

// object 사용 -> { "kars":true }, "kars"로 매칭
// type Includes<T extends readonly any[], U> = {
//   [P in T[number]]: true;
// }[U] extends true
//   ? true
//   : false;
/**
 * test
 */
{
  type isPillarMen = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Dio">; // expected to be `false`
  type isPillarMen2 = Includes<
    ["Kars", "Esidisi", "Wamuu", "Santana"],
    "Santana"
  >; // expected to be `true`
  const rs: isPillarMen = false;
  const rs2: isPillarMen2 = true;
}
