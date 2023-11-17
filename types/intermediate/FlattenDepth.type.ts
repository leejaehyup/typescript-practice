/**
 * Recursively flatten array up to depth times.
 */

type FlattenDepth<T, D extends number = 1, U extends unknown[] = MakeNumberToArray<D>> = 0 extends U['length']
  ? T
  : T extends [infer F, ...infer R]
  ? F extends unknown[]
    ? U extends [unknown, ...infer UR]
      ? [...FlattenDepth<F, D, UR>, ...FlattenDepth<R, D, U>]
      : never
    : [F, ...FlattenDepth<R, D, U>]
  : T;

/**
 * test
 */
{
  type a = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2>; // [1, 2, 3, 4, [5]]. flattern 2 times
  type b = FlattenDepth<[1, 2, [3, 4], [[[5]]]]>; // [1, 2, 3, 4, [[5]]]. Depth defaults to be 1
  type c = FlattenDepth<[1, 2, [3, 4], [[3, 4]], [[[3, 4]]]]>; // [1, 2, 3, 4, [[5]]]. Depth defaults to be 1
  const rs: a = [1, 2, 3, 4, [5]];
  const rs2: b = [1, 2, 3, 4, [[5]]];
  const rs3: c = [1, 2, 3, 4, [3, 4], [[3, 4]]];
}
