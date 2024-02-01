/**
 * The get function in lodash is a quite convenient helper for accessing nested values in JavaScript.
 * However, when we come to TypeScript, using functions like this will make you lose the type information.
 * With TS 4.1's upcoming Template Literal Types feature, properly typing get becomes possible. Can you implement it?
 */

import { Equal, Expect } from 'types/checker.type';

type Get<T extends Record<string, any>, S extends string, U extends unknown[] = []> = S extends `${infer F}.${infer L}`
  ? F extends keyof T
    ? Get<T[F], L, [...U, unknown]>
    : Get<T[F], L, U>
  : S extends keyof T
  ? T[S]
  : U['length'] extends 0
  ? never
  : false;

{
  type Data = {
    foo: {
      bar: {
        value: 'foobar';
        count: 6;
      };
      included: true;
    };
    hello: 'world';
  };

  type A = Get<Data, 'hello'>; // 'world'
  type B = Get<Data, 'foo.bar.count'>; // 6
  type C = Get<Data, 'foo.baz'>; // { value: 'foobar', count: 6 }

  type cases = [
    Expect<Equal<Get<Data, 'hello'>, 'world'>>,
    Expect<Equal<Get<Data, 'foo.bar.count'>, 6>>,
    Expect<Equal<Get<Data, 'foo.bar'>, { value: 'foobar'; count: 6 }>>,
    Expect<Equal<Get<Data, 'foo.baz'>, false>>,
    Expect<Equal<Get<Data, 'no.existed'>, never>>,
  ];
}
