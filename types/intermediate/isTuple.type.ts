/**
 * Implement a type IsTuple, which takes an input type T and returns whether T is tuple type.
 */

type IsTuple<T> = T extends readonly unknown[] ? (number extends T['length'] ? false : true) : false;

/**
 * test
 */
{
  type case1 = IsTuple<[number]>; // true
  type case2 = IsTuple<readonly [number]>; // true
  type case3 = IsTuple<number[]>; // false
  const rs1: case1 = true;
  const rs2: case2 = true;
  const rs3: case3 = false;
}
