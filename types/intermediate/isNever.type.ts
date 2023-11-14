/**
 * input type으로 T를 받는 IsNever type을 구현하세요.
 * 만약 T의 유형이 never으로 확인되면 true를 반환하고 아니면 false를 반환합니다.
 *
 * @keyword
 * distributive conditional type
 *
 * @description
 * never is the empty union
 * 1. 타입스크립트는 조건부 타입에 대해 자동적으로 유니언 타입을 할당한다.
 * 2. never은 빈 유니언 타입이다.
 * 3. 그러므로 할당이 발생하면 할당할 것이 없으므로 조건부 타입은 never로 평가된다.
 * 여기서 유일한 해결 방안은 암묵적 할당을 막고 타입 매개변수를 튜플에 래핑하는 것이다.
 */

type IsNever<T> = [T] extends [never] ? true : false;
// type IsNever<T> = T extends never ? true : false;

/**
 * test
 */
{
  type A = IsNever<never>; // expected to be true
  type B = IsNever<undefined>; // expected to be false
  type C = IsNever<null>; // expected to be false
  type D = IsNever<[]>; // expected to be false
  type E = IsNever<number>; // expected to be false
  const rs1: A = true;
  const rs2: B = false;
  const rs3: C = false;
  const rs4: D = false;
  const rs5: E = false;
}
