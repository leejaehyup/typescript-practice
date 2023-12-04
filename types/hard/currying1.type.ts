/**
 * Currying is the technique of converting a function that takes multiple arguments into a sequence of functions that each take a single argument.
 * The function passed to Currying may have multiple arguments, you need to correctly type it.
 * In this challenge, the curried function only accept one argument at a time. Once all the argument is assigned, it should return its result.
 */

import { Equal, Expect } from 'types/checker.type';

type Curried<F> = F extends (...args: infer T) => infer R
  ? T extends [infer First, ...infer Rest]
    ? (arg: First) => Curried<(...arg: Rest) => R>
    : R
  : never;
declare function Currying<F>(fn: F): Curried<F>;

/**
 * test
 */
{
  const add = (a: number, b: number) => a + b;
  const three = add(1, 2);

  const curriedAdd = Currying(add);
  const five = curriedAdd(2)(3);

  const curried1 = Currying((a: string, b: number, c: boolean) => true);
  const curried2 = Currying((a: string, b: number, c: boolean, d: boolean, e: boolean, f: string, g: boolean) => true);
  const curried3 = Currying(() => true);

  type cases = [
    Expect<Equal<typeof curried1, (a: string) => (b: number) => (c: boolean) => true>>,
    Expect<
      Equal<
        typeof curried2,
        (
          a: string,
        ) => (b: number) => (c: boolean) => (d: boolean) => (e: boolean) => (f: string) => (g: boolean) => true
      >
    >,
    Expect<Equal<typeof curried3, () => true>>,
  ];
}
