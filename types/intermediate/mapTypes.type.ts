/**
 * Implement MapTypes<T, R> which will transform types in object T to different types defined by type R which has the following structure
 */

import { Equal, Expect } from 'types/checker.type';

type MapTypes<
  T extends {},
  R extends {
    mapFrom: unknown;
    mapTo: unknown;
  },
> = {
  [key in keyof T]: T[key] extends R['mapFrom'] ? (R extends { mapFrom: T[key] } ? R['mapTo'] : never) : T[key];
};

/**
 * test
 */

{
  type cases = [
    Expect<Equal<MapTypes<{ stringToArray: string }, { mapFrom: string; mapTo: [] }>, { stringToArray: [] }>>,
    Expect<Equal<MapTypes<{ stringToNumber: string }, { mapFrom: string; mapTo: number }>, { stringToNumber: number }>>,
    Expect<
      Equal<
        MapTypes<{ stringToNumber: string; skipParsingMe: boolean }, { mapFrom: string; mapTo: number }>,
        { stringToNumber: number; skipParsingMe: boolean }
      >
    >,
    Expect<
      Equal<
        MapTypes<{ date: string }, { mapFrom: string; mapTo: Date } | { mapFrom: string; mapTo: null }>,
        { date: null | Date }
      >
    >,
    Expect<Equal<MapTypes<{ date: string }, { mapFrom: string; mapTo: Date | null }>, { date: null | Date }>>,
    Expect<
      Equal<
        MapTypes<{ fields: Record<string, boolean> }, { mapFrom: Record<string, boolean>; mapTo: string[] }>,
        { fields: string[] }
      >
    >,
    Expect<Equal<MapTypes<{ name: string }, { mapFrom: boolean; mapTo: never }>, { name: string }>>,
    Expect<
      Equal<
        MapTypes<{ name: string; date: Date }, { mapFrom: string; mapTo: boolean } | { mapFrom: Date; mapTo: string }>,
        { name: boolean; date: string }
      >
    >,
  ];
}
