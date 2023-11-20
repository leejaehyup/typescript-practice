/**
 * Do you know lodash?
 * Chunk is a very useful function in it,
 * now let's implement it. Chunk<T, N> accepts two required type parameters,
 * the T must be a tuple, and the N must be an integer >=1
 */

type Chunk<T extends unknown[], N extends number, C extends unknown[] = [], R extends unknown[] = []> = T extends [
  infer F,
  ...infer Rest,
]
  ? C['length'] extends N
    ? Chunk<Rest, N, [F], [...R, C]>
    : Chunk<Rest, N, [...C, F], [...R]>
  : [...R, C];
/**
 * best answer
 */

type Chunk2<T extends any[], N extends number, Swap extends any[] = []> = Swap['length'] extends N
  ? [Swap, ...Chunk2<T, N>]
  : T extends [infer K, ...infer L]
  ? Chunk2<L, N, [...Swap, K]>
  : Swap extends []
  ? Swap
  : [Swap];

/**
 * test
 */
{
  type exp1 = Chunk<[1, 2, 3], 2>; // expected to be [[1, 2], [3]]
  type exp2 = Chunk<[1, 2, 3], 4>; // expected to be [[1, 2, 3]]
  type exp3 = Chunk<[1, 2, 3], 1>; // expected to be [[1], [2], [3]]
  const rs1: exp1 = [[1, 2], [3]];
  const rs2: exp2 = [[1, 2, 3]];
  const rs3: exp3 = [[1], [2], [3]];
}
