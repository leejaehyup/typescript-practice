/**
 * Array.push의 제네릭 버전을 구현하세요.
 */

type Push<T extends unknown[], V extends unknown> = [...T, V];

/**
 * test
 */
{
  type Result = Push<[1, 2], "3">; // [1, 2, '3']
  const rs: Result = [1, 2, "3"];
}
