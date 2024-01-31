/**
 * Implement CamelCase<T> which converts snake_case string to camelCase.
 */

import { Equal, Expect } from 'types/checker.type';

type CamelCase<S extends string, T extends string = Lowercase<S>> = T extends `${infer F}_${infer M}${infer L}`
  ? M extends '_'
    ? `${F}_${CamelCase<`_${L}`>}`
    : M extends '$'
    ? `${F}_${M}${CamelCase<L>}`
    : `${F}${Uppercase<M>}${CamelCase<L>}`
  : T;

/**
 * test
 */
{
  type camelCase1 = CamelCase<'foo__bar'>; // expected to be 'helloWorldWithTypes'
  type camelCase2 = CamelCase<'HELLO_WORLD_WITH_TYPES'>; // expected to be same as previous one

  type cases = [
    Expect<Equal<CamelCase<'foobar'>, 'foobar'>>,
    Expect<Equal<CamelCase<'FOOBAR'>, 'foobar'>>,
    Expect<Equal<CamelCase<'foo_bar'>, 'fooBar'>>,
    Expect<Equal<CamelCase<'foo__bar'>, 'foo_Bar'>>,
    Expect<Equal<CamelCase<'foo_$bar'>, 'foo_$bar'>>,
    Expect<Equal<CamelCase<'foo_bar_'>, 'fooBar_'>>,
    Expect<Equal<CamelCase<'foo_bar__'>, 'fooBar__'>>,
    Expect<Equal<CamelCase<'foo_bar_$'>, 'fooBar_$'>>,
    Expect<Equal<CamelCase<'foo_bar_hello_world'>, 'fooBarHelloWorld'>>,
    Expect<Equal<CamelCase<'HELLO_WORLD_WITH_TYPES'>, 'helloWorldWithTypes'>>,
    Expect<Equal<CamelCase<'-'>, '-'>>,
    Expect<Equal<CamelCase<''>, ''>>,
    Expect<Equal<CamelCase<'😎'>, '😎'>>,
  ];
}
