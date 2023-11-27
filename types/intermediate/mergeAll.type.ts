/**
 * Merge variadic number of types into a new type. If the keys overlap, its values should be merged into an union
 */

type FlattenKeys<T extends {}[], U extends {} = {}> = T extends [infer F, ...infer Rest extends {}[]]
  ? FlattenKeys<
      Rest,
      {
        [key in keyof F | keyof U]: [];
      }
    >
  : U;

type MergeAll<T extends {}[], R extends Record<PropertyKey, any> = FlattenKeys<T>> = T extends [
  infer F extends Record<PropertyKey, any>,
  ...infer Rest extends {}[],
]
  ? MergeAll<
      Rest,
      {
        [key in keyof R]: [unknown extends F[key] ? never : F[key], ...R[key]];
      }
    >
  : R;

/**
 * test
 */
{
  type Foo = { a: 1; b: 2 };
  type Bar = { a: 2 };
  type Baz = { c: 3 };

  type Result = MergeAll<[Foo, Bar, Baz]>; // expected to be { a: 1 | 2; b: 2; c: 3 }
}
