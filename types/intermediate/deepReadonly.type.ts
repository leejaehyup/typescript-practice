/**
 * 객체의 프로퍼티와 모든 하위 객체를 재귀적으로 읽기 전용으로 설정하는 제네릭 DeepReadonly<T>를 구현하세요.
 * 이 챌린지에서는 타입 파라미터 T를 객체 타입으로 제한하고 있습니다. 객체뿐만 아니라 배열, 함수, 클래스 등 가능한 다양한 형태의 타입 파라미터를 사용하도록 도전해 보세요.
 */

import { Equal, Expect } from "types/checker.type";

type DeepReadonly<T> = keyof T extends never
  ? T
  : { readonly [k in keyof T]: DeepReadonly<T[k]> };

/**
 * test
 */
{
  type X = {
    x: {
      a: 1;
      b: "hi";
    };
    y: "hey";
  };

  type Expected = {
    readonly x: {
      readonly a: 1;
      readonly b: "hi";
    };
    readonly y: "hey";
  };

  type Todo = DeepReadonly<X>; // should be same as `Expected`

  type cases = [Expect<Equal<DeepReadonly<X1>, Expected1>>];

  type X1 = {
    a: () => 22;
    b: string;
    c: {
      d: boolean;
      e: {
        g: {
          h: {
            i: true;
            j: "string";
          };
          k: "hello";
        };
        l: [
          "hi",
          {
            m: ["hey"];
          }
        ];
      };
    };
  };

  type Expected1 = {
    readonly a: () => 22;
    readonly b: string;
    readonly c: {
      readonly d: boolean;
      readonly e: {
        readonly g: {
          readonly h: {
            readonly i: true;
            readonly j: "string";
          };
          readonly k: "hello";
        };
        readonly l: readonly [
          "hi",
          {
            readonly m: readonly ["hey"];
          }
        ];
      };
    };
  };
}
