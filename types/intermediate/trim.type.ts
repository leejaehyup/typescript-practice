/**
 * 정확한 문자열 타입이고 양쪽 끝의 공백이 제거된 새 문자열을 반환하는 Trim<T>를 구현하십시오.
 */

type Trim<T extends string> = T extends ` ${infer S} ` ? Trim<S> : T;

/**
 * test
 */
{
  type trimmed = Trim<"  Hello World  ">; // 기대되는 결과는 'Hello World'입니다.
}
