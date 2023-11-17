/**
 * Implement the type version of Array.reverse
 */

type Reverse<T, V extends unknown[] = []> = T extends [...infer R, infer L] ? Reverse<R, [...V, L]> : V;

/**
 * best answer
 */
type Reverse2<T extends any[]> = T extends [infer F, ...infer Rest] ? [...Reverse<Rest>, F] : T;

/**
 * test
 */
{
  type a = Reverse<['a', 'b']>; // ['b', 'a']
  type b = Reverse<['a', 'b', 'c']>; // ['c', 'b', 'a']
}
