/**
 * 정확한 문자열 타입이고 시작 부분의 공백이 제거된 새 문자열을 반환하는 TrimLeft<T>를 구현하십시오.
 */

type TrimLeft<T extends string> = T extends ` ${infer R}` ? TrimLeft<R> : T;

/**
 * test
 */
{
  type trimed = TrimLeft<"  Hello World  ">; // 기대되는 결과는 'Hello World  '입니다.
  const rs: trimed = "Hello World  ";
}
