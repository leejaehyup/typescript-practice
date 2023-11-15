/**
 * Drop a specified char from a string.
 */

type DropChar<T extends string, K extends string, M extends string = ''> = T extends `${infer First}${infer Rest}`
  ? First extends K
    ? DropChar<Rest, K, M>
    : DropChar<Rest, K, `${M}${First}`>
  : M;
type DropChar2<S, C extends string> = S extends `${infer L}${C}${infer R}` ? DropChar<`${L}${R}`, C> : S;

/**
 * test
 */
{
  type Butterfly = DropChar<' b u t t e r f l y ! ', ' '>; // 'butterfly!'
}
