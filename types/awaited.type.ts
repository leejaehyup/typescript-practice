/**
 * Promise와 같은 타입에 감싸인 타입이 있을 때, 안에 감싸인 타입이 무엇인지 어떻게 알 수 있을까요?
 *  예시: 들어 Promise<ExampleType>이 있을 때, ExampleType을 어떻게 얻을 수 있을까요?
 */

type MyAwaited<T extends Promise<any>> = T extends Promise<infer U> ? U : never;
// nested promise일 경우 재귀로 찾기
// type MyAwaited<T extends Promise<any>> = T extends Promise<infer U>
//   ? U extends Promise<any>
//     ? MyAwaited<U>
//     : U
//   : never;

/**
 * type
 */
{
  type ExampleType = Promise<string>;

  type Result = MyAwaited<ExampleType>; // string
  const r: Result = "!23";
  //   const r2: Result = 123;
}
