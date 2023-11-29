/**
 * Simulate the solution for the Tower of Hanoi puzzle.
 * Your type should take the number of rings as input an return an array of steps to move the rings from tower A to tower B using tower C as additional.
 * Each entry in the array should be a pair of strings [From, To] which denotes ring being moved From -> To.
 */

import { Equal, Expect } from 'types/checker.type';

type Hanoi<N extends number, From = 'A', To = 'B', Intermediate = 'C'> = any;

/**
 * test
 */
{
  type Tests = [// Expect<Equal<Hanoi<0>, []>>,
  // Expect<Equal<Hanoi<1>, [['A', 'B']]>>,
  // Expect<Equal<Hanoi<2>, [['A', 'C'], ['A', 'B'], ['C', 'B']]>>,
  // Expect<Equal<Hanoi<3>, [['A', 'B'], ['A', 'C'], ['B', 'C'], ['A', 'B'], ['C', 'A'], ['C', 'B'], ['A', 'B']]>>,
  // Expect<
  //   Equal<
  //     Hanoi<5>,
  //     [
  //       ['A', 'B'],
  //       ['A', 'C'],
  //       ['B', 'C'],
  //       ['A', 'B'],
  //       ['C', 'A'],
  //       ['C', 'B'],
  //       ['A', 'B'],
  //       ['A', 'C'],
  //       ['B', 'C'],
  //       ['B', 'A'],
  //       ['C', 'A'],
  //       ['B', 'C'],
  //       ['A', 'B'],
  //       ['A', 'C'],
  //       ['B', 'C'],
  //       ['A', 'B'],
  //       ['C', 'A'],
  //       ['C', 'B'],
  //       ['A', 'B'],
  //       ['C', 'A'],
  //       ['B', 'C'],
  //       ['B', 'A'],
  //       ['C', 'A'],
  //       ['C', 'B'],
  //       ['A', 'B'],
  //       ['A', 'C'],
  //       ['B', 'C'],
  //       ['A', 'B'],
  //       ['C', 'A'],
  //       ['C', 'B'],
  //       ['A', 'B'],
  //     ]
  //   >
  // >,];
}
