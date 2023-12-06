/**
 * Implement the advanced util type GetOptional<T>, which remains all the optional fields
 */

import { Equal, Expect } from 'types/checker.type';

type GetOptional<T> = {
  [K in keyof T as T[K] extends Required<T>[K] ? never : K]: T[K];
};

/**
 * test
 */
{
  type I = GetOptional<{ foo: number; bar?: string }>; // expected to be { bar?: string }
  type cases = [
    Expect<Equal<GetOptional<{ foo: number; bar?: string }>, { bar?: string }>>,
    Expect<Equal<GetOptional<{ foo: undefined; bar?: undefined }>, { bar?: undefined }>>,
  ];
}
