/**
 * Implement the type version of Array.shift
 */

type Shift<T> = T extends [unknown, ...infer U] ? [...U] : never;

/**
 * test
 */

{
  type Result = Shift<[3, 2, 1]>; // [2, 1]
}
