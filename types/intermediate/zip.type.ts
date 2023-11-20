/**
 * In This Challenge, You should implement a type Zip<T, U>, T and U must be Tuple
 */

type Zip<T, U> = T extends [infer F, ...infer Rest]
  ? U extends [infer _F, ...infer _Rest]
    ? [[F, _F], ...Zip<Rest, _Rest>]
    : never
  : [];
/**
 * best answer
 */
type Zip2<T extends any[], U extends any[]> = [T, U] extends [[infer L, ...infer RestT], [infer R, ...infer RestU]]
  ? [[L, R], ...Zip<RestT, RestU>]
  : [];

/**
 * test
 */
{
  type exp = Zip<[1, 2], [true, false]>; // expected to be [[1, true], [2, false]]
}
