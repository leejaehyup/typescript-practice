/**
 * Implement Python liked any function in the type system.
 * A type takes the Array and returns true if any element of the Array is true. If the Array is empty, return false.
 * Python의 any function을 타입 시스템으로 구현하세요
 * 배열을 사용하고 배열의 요소가 참이면 true를 반환합니다. 배열이 비어 있으면 false를 반환합니다
 */

type isNill<T> = T extends 0 | false | '' | [] ? true : T extends { [key: string]: never } ? true : false;
type AnyOf<T extends unknown[], B extends boolean = false> = T extends [infer First, ...infer Rest]
  ? AnyOf<Rest, B extends true ? true : isNill<First> extends true ? false : true>
  : B;

// type AnyOf<T extends any[]> = T[number] extends 0 | '' | false | [] | { [key: string]: never } ? false : true;

/**
 * test
 */
{
  type Sample1 = AnyOf<[1, '', false, [], {}]>; // expected to be true.
  type Sample2 = AnyOf<[0, '', false, [], {}]>; // expected to be false.
  const rs1: Sample1 = true;
  const rs2: Sample2 = false;
}
