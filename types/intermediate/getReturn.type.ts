/**
 * 내장 제네릭 ReturnType<T>을 이를 사용하지 않고 구현하세요.
 */

import { Equal, Expect } from "types/checker.type";

type MyReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : never;

/**
 * test
 */
{
  const fn = (v: boolean) => {
    if (v) return 1;
    else return 2;
  };

  type a = MyReturnType<typeof fn>; // should be "1 | 2"
  const rs: a = 1;
  type cases = Expect<Equal<MyReturnType<typeof fn>, 1 | 2>>;
}
