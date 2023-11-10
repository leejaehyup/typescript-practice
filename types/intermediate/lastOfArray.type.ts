/**
 * 배열 T를 사용하고 마지막 요소를 반환하는 제네릭 Last<T>를 구현합니다.
 */

type Last<T> = T extends [...any, infer U] ? U : never;

/**
 * test
 */
{
  type arr1 = ["a", "b", "c"];
  type arr2 = [3, 2, 1];

  type tail1 = Last<arr1>; // expected to be 'c'
  type tail2 = Last<arr2>; // expected to be 1
  type tail3 = Last<1>; // expected to be never
}
