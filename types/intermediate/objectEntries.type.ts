/**
 * Implement the type version of Object.entries
 */

import { Equal, Expect } from 'types/checker.type';

type ObjectEntries<T, U = Required<T>> = {
  [key in keyof U]: [key, U[key] extends never ? undefined : U[key]];
}[keyof U];

/**
 * test
 */
{
  interface Model {
    name: string;
    age: number;
    locations: string[] | null;
  }

  type ModelEntries = ['name', string] | ['age', number] | ['locations', string[] | null];

  type cases = [
    Expect<Equal<ObjectEntries<Model>, ModelEntries>>,
    Expect<Equal<ObjectEntries<Partial<Model>>, ModelEntries>>,
    Expect<Equal<ObjectEntries<{ key?: undefined }>, ['key', undefined]>>,
    Expect<Equal<ObjectEntries<{ key: undefined }>, ['key', undefined]>>,
    Expect<Equal<ObjectEntries<{ key: string | undefined }>, ['key', string | undefined]>>,
  ];
}
