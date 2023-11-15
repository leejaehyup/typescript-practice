/**
 * 객체 유형에서 인덱스 시그니처를 제외하는 RemoveIndexSignature<T>를 구현하세요
 */

type RemoveIndexSignature<T, K = PropertyKey> = {
  [key in keyof T as K extends key ? never : key extends K ? key : never]: T[key];
};

/**
 * test
 */
{
  type Foo = {
    [key: string]: any;
    foo(): void;
  };

  type A = RemoveIndexSignature<Foo>; // expected { foo(): void }
}
