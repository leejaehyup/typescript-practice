/**
 * 체인 가능 옵션은 일반적으로 Javascript에서 사용됩니다. 하지만 TypeScript로 전환하면 제대로 구현할 수 있나요?
 * 이 챌린지에서는 option(key, value)과 get() 두가지 함수를 제공하는 객체(또는 클래스) 타입을 구현해야 합니다.
 * 현재 타입을 option으로 지정된 키와 값으로 확장할 수 있고 get으로 최종 결과를 가져올 수 있어야 합니다.
 */

import { Alike, Equal, Expect } from "types/checker.type";

type Chainable<T = {}> = {
  option<K extends string, V extends unknown>(
    key: Exclude<K, keyof T>,
    value: V
  ): Chainable<
    { [key in keyof T as key extends K ? never : key]: T[key] } & {
      [S in K]: V;
    }
  >;
  get(): T;
};
// type Chainable<T = {}> = {
//   option<K extends string, V>(key: Exclude<K, keyof T>, value: V): Chainable<Omit<T,K> & Record<K, V>>;
//   get(): T;
// };

/**
 * test
 */
declare const config: Chainable;
{
  const result = config
    .option("foo", 123)
    .option("name", "type-challenges")
    .option("bar", { value: "Hello World" })
    .get();

  // 결과는 다음과 같습니다:
  interface Result {
    foo: number;
    name: string;
    bar: {
      value: string;
    };
  }

  const result1 = config
    .option("foo", 123)
    .option("bar", { value: "Hello World" })
    .option("name", "type-challenges")
    .get();

  const result2 = config
    .option("name", "another name")
    // @ts-expect-error
    .option("name", "last name")
    .get();

  const result3 = config
    .option("name", "another name")
    // @ts-expect-error
    .option("name", 123)
    .get();

  type cases = [
    Expect<Alike<typeof result1, Expected1>>,
    Expect<Alike<typeof result2, Expected2>>,
    Expect<Alike<typeof result3, Expected3>>
  ];

  type Expected1 = {
    foo: number;
    bar: {
      value: string;
    };
    name: string;
  };

  type Expected2 = {
    name: string;
  };

  type Expected3 = {
    name: number;
  };
}
