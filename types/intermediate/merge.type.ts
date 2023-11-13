/**
 * 두개의 타입을 새로운 타입으로 병합하세요. 두번째 타입의 Key가 첫번째 타입을 덮어씁니다(재정의합니다)
 *
 * infer, keyof
 */

type Merge<T extends {}, F extends {}> = {
  [key in keyof T | keyof F]: key extends keyof F ? F[key] : key extends keyof T ? T[key] : never;
};

/**
 * test
 */
{
  type foo = {
    name: string;
    age: string;
  };
  type coo = {
    age: number;
    sex: string;
  };

  type Result = Merge<foo, coo>; // expected to be {name: string, age: number, sex: string}
  const rs: Result = { name: 'test', age: 21, sex: 'M' };
}
