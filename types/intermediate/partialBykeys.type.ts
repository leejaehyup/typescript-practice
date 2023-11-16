/**
 * 두 개의 타입 인수 T와 K를 사용하는 PartialByKeys<T, K>를 구성하세요.
 * K는 옵셔널하며 T의 프로퍼티로 이루어진 유니언 타입을 지정할 수 있습니다.
 * K를 제공하지 않는다면 Partial<T>와 같이 모든 프로퍼티를 옵셔널하게 만들어야 합니다.
 */

type PartialByKeys<T extends {}, K extends keyof T = keyof T> =
  | {
      [key in keyof T as key extends K ? key : never]?: T[key];
    } & {
      [key in Exclude<keyof T, K>]: T[key];
    };

/**
 * test
 */
{
  interface User {
    name: string;
    age: number;
    address: string;
  }

  type UserPartialName = PartialByKeys<User, 'name'>; // { name?:string; age:number; address:string }
  const rs: UserPartialName = { address: '', age: 3 };
}
