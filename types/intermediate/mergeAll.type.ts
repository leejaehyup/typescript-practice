/**
 * Merge variadic number of types into a new type. If the keys overlap, its values should be merged into an union
 */

import { Equal, Expect } from 'types/checker.type';

type FlattenKeys<T extends {}[], U extends {} = {}> = T extends [infer F, ...infer Rest extends {}[]]
  ? FlattenKeys<
      Rest,
      {
        [key in keyof F | keyof U]: [];
      }
    >
  : U;

type Unionize<T> = T extends [infer F, ...infer Rest]
  ? unknown extends F
    ? Unionize<Rest>
    : F | Unionize<Rest>
  : never;

type MergeAll<T extends {}[], R extends Record<PropertyKey, any> = FlattenKeys<T>> = T extends [
  infer F extends Record<PropertyKey, any>,
  ...infer Rest extends {}[],
]
  ? MergeAll<
      Rest,
      {
        [key in keyof R]: [F[key], ...R[key]];
      }
    >
  : {
      [key in keyof R]: Unionize<R[key]>;
    };

/**
 * best answer
 */
// type MergeAll<XS extends object[], Res = {}> = XS extends [infer L, ...infer R extends object[]]
//   ? MergeAll<
//       R,
//       Omit<Res, keyof L> & {
//         [p in keyof L]: p extends keyof Res ? L[p] | Res[p] : L[p];
//       }
//     >
//   : Omit<Res, never>;
/**
 * test
 */
{
  type Foo = { a: 1; b: 2 };
  type Bar = { a: 2 };
  type Baz = { c: 3 };

  type Result = MergeAll<[Foo, Bar, Baz]>; // expected to be { a: 1 | 2; b: 2; c: 3 }

  type cases = [
    Expect<Equal<MergeAll<[]>, {}>>,
    Expect<Equal<MergeAll<[{ a: 1 }]>, { a: 1 }>>,
    Expect<Equal<MergeAll<[{ a: string }, { a: string }]>, { a: string }>>,
    Expect<Equal<MergeAll<[{}, { a: string }]>, { a: string }>>,
    Expect<Equal<MergeAll<[{ a: 1 }, { c: 2 }]>, { a: 1; c: 2 }>>,
    Expect<Equal<MergeAll<[{ a: 1; b: 2 }, { a: 2 }, { c: 3 }]>, { a: 1 | 2; b: 2; c: 3 }>>,
    Expect<Equal<MergeAll<[{ a: 1 }, { a: number }]>, { a: number }>>,
    Expect<Equal<MergeAll<[{ a: number }, { a: 1 }]>, { a: number }>>,
    Expect<Equal<MergeAll<[{ a: 1 | 2 }, { a: 1 | 3 }]>, { a: 1 | 2 | 3 }>>,
  ];
}
