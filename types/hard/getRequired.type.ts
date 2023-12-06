/**
 * Implement the advanced util type GetRequired<T>, which remains all the required fields
 */

import { Equal, Expect } from 'types/checker.type';

type GetRequired<T> = {
  [K in keyof T as T[K] extends Required<T>[K] ? K : never]: T[K];
};

/**
 * test
 */
{
  type I = GetRequired<{ foo: number; bar?: string }>; // expected to be { foo: number }
  type cases = [
    Expect<Equal<GetRequired<{ foo: number; bar?: string }>, { foo: number }>>,
    Expect<Equal<GetRequired<{ foo: undefined; bar?: undefined }>, { foo: undefined }>>,
  ];
}
