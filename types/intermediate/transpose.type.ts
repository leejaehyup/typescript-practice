/**
 * The transpose of a matrix is an operator which flips a matrix over its diagonal;
 * that is, it switches the row and column indices of the matrix A by producing another matrix, often denoted by AT.
 */
type Temp<M extends number[][], I extends number> = M extends [
  infer F extends number[],
  ...infer Res extends number[][],
]
  ? [F[I], ...Temp<Res, I>]
  : [];

type Transpose<M extends number[][], Res extends number[][] = []> = M extends [infer F extends number[], ...any]
  ? F['length'] extends Res['length']
    ? []
    : [Temp<M, Res['length']>, ...Transpose<M, [...Res, any]>]
  : [];
/**
 * test
 */
{
  type test = Transpose<[[1, 2], [3, 4], [5, 6]]>;
  type Matrix = Transpose<[[1]]>; // expected to be [[1]]
  type Matrix1 = Transpose<[[1, 2], [3, 4]]>; // expected to be [[1, 3], [2, 4]]
  type Matrix2 = Transpose<[[1, 2, 3], [4, 5, 6]]>; // expected to be [[1, 4], [2, 5], [3, 6]]
}
