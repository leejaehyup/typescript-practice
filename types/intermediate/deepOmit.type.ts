/**
 * Implement a typeDeepOmit, Like Utility types Omit, A type takes two arguments
 */

import { Equal, Expect } from 'types/checker.type';

type DeepOmit<T, S extends string> = {
  [K in keyof T as K extends S ? never : K]: K extends S
    ? never
    : S extends `${infer F}.${infer R}`
    ? K extends F
      ? DeepOmit<T[K], R>
      : T[K]
    : T[K];
};

/**
 * test
 */
{
  type obj = {
    person: {
      name: string;
      age: {
        value: number;
      };
    };
  };

  type test1 = DeepOmit<obj, 'person'>; // {}
  type test2 = DeepOmit<obj, 'person.name'>; // { person: { age: { value: number } } }
  type test3 = DeepOmit<obj, 'name'>; // { person: { name: string; age: { value: number } } }
  type test4 = DeepOmit<obj, 'person.age.value'>; // { person: { name: string; age: {} } }
  type cases = [
    Expect<Equal<DeepOmit<obj, 'person'>, {}>>,
    Expect<Equal<DeepOmit<obj, 'person.name'>, { person: { age: { value: number } } }>>,
    Expect<Equal<DeepOmit<obj, 'name'>, obj>>,
    Expect<Equal<DeepOmit<obj, 'person.age.value'>, { person: { name: string; age: {} } }>>,
  ];
}
