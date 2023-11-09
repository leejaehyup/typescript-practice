/**
 * Array.unshift의 타입 버전을 구현하세요.
 */

type Unshift<T extends unknown[], V extends unknown> = [V, ...T];

/**
 * test
 */
{
  type Result = Unshift<[1, 2], 0>; // [0, 1, 2,]
  const rs: Result = [0, 1, 2];
}
