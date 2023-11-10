/**
 * 함수 타입 Fn과 어떤 타입 A가 주어질 때 Fn의 인수와 A를 마지막 인수로 받는 Fn과 동일한 함수 유형인 G를 생성하세요.
 */

type AppendArgument<
  F extends (...args: any) => any,
  A extends unknown
> = F extends (...args: infer R) => infer V ? (...args: [...R, A]) => V : never;

/**
 * test
 */
{
  type Fn = (a: number, b: string) => number;
  type Result = AppendArgument<Fn, boolean>;
  // 기대되는 결과는 (a: number, b: string, x: boolean) => number 입니다.
}
