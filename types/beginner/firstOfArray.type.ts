/**
 * 배열(튜플) T를 받아 첫 원소의 타입을 반환하는 제네릭 First<T>를 구현하세요.
 */

// type First<T extends PropertyKey[]> = T[0];
type First<T extends readonly any[]> = T extends [infer F, ...any] ? F : never;

/**
 * test
 */
{
  type arr1 = ["a", "b", "c"];
  type arr2 = [3, 2, 1];

  type head1 = First<arr1>; // expected to be 'a'
  type head2 = First<arr2>; // expected to be 3
}
