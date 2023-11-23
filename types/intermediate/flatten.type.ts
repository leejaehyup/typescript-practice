/**
 * 주어진 배열을 플랫한 배열 타입으로 바꾸는 Flatten 타입을 구현하세요.
 */

type Flatten<T, R extends any[] = []> = T extends [infer F, ...infer L]
  ? [F] extends [never]
    ? Flatten<L, R>
    : F extends any[]
    ? Flatten<L, [...R, ...Flatten<F>]>
    : Flatten<L, [...R, F]>
  : R;

/**
 * test
 */
{
  type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]>; // [1, 2, 3, 4, 5]
  const rs: flatten = [1, 2, 3, 4, 5];
}
