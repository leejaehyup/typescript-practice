import { Equal, Expect } from 'types/checker.type';

/**
 * Convert a string literal to a number, which behaves like Number.parseInt.
 */
type ToNumber<S extends string> = S extends `${infer N extends number}` ? N : never;
/**
 * test
 */
{
  type cases = [
    Expect<Equal<ToNumber<'0'>, 0>>,
    Expect<Equal<ToNumber<'5'>, 5>>,
    Expect<Equal<ToNumber<'12'>, 12>>,
    Expect<Equal<ToNumber<'27'>, 27>>,
    Expect<Equal<ToNumber<'18@7_$%'>, never>>,
  ];
}
