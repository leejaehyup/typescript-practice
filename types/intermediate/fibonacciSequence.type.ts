/**
 * Implement a generic Fibonacci<T> that takes a number T and returns its corresponding Fibonacci number.
 * The sequence starts: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...
 */

type Fibonacci<T extends number, U extends any[] = [[unknown], [unknown]]> = T extends 1 | 2
  ? 1
  : U['length'] extends T
  ? U[0]['length']
  : Fibonacci<T, [[...U[0], ...U[1]], ...U]>;

/**
 * test
 */
{
  type Result1 = Fibonacci<3>; // 2
  type Result2 = Fibonacci<8>; // 21
  const rs1: Result1 = 2;
  const rs2: Result2 = 21;
}
