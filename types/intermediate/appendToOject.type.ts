/**
 * 주어진 인터페이스에 새로운 필드를 추가한 object 타입을 구현하세요. 이 타입은 세 개의 인자를 받습니다.
 */

type AppendToObject<T extends {}, K extends PropertyKey, V extends any> = {
  [key in keyof T | K]: key extends keyof T ? T[key] : V;
};

/**
 * test
 */

{
  type Test = { id: "1" };
  type Result = AppendToObject<Test, "value", 4>; // expected to be { id: '1', value: 4 }
  const rs: Result = { id: "1", value: 4 };
}
