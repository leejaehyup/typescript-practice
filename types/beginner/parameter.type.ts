import { Expect, Equal } from "../checker.type";
/**
 * 내장 제네릭 Parameters<T>를 이를 사용하지 않고 구현하세요.
 */

type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...ags: infer S
) => any
  ? S
  : unknown;

/**
 * test
 */
{
  const foo = (arg1: string, arg2: number): void => {};
  type FunctionParamsType = MyParameters<typeof foo>; // [arg1: string, arg2: number]
  const rs: FunctionParamsType = ["123", 123];

  type cases = Expect<Equal<MyParameters<typeof foo>, [string, number]>>;
}
