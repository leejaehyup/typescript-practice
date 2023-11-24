/**
 * Convert a property of type literal (label type) to a primitive type.
 */

import { Equal, Expect } from 'types/checker.type';

type ToPrimitive<T> = T extends object
  ? T extends (...args: unknown[]) => unknown
    ? Function
    : {
        [K in keyof T]: ToPrimitive<T[K]>;
      }
  : T extends { valueOf(): infer R }
  ? R
  : never;

/**
 * test
 */
{
  type X = {
    name: 'Tom';
    age: 30;
    married: false;
    addr: {
      home: '123456';
      phone: '13111111111';
    };
  };

  type Expected = {
    name: string;
    age: number;
    married: boolean;
    addr: {
      home: string;
      phone: string;
    };
  };
  type Todo = ToPrimitive<X>; // should be same as `Expected`
  type PersonInfo = {
    name: 'Tom';
    age: 30;
    married: false;
    addr: {
      home: '123456';
      phone: '13111111111';
    };
    hobbies: ['sing', 'dance'];
    readonlyArr: readonly ['test'];
    fn: () => any;
  };

  type ExpectedResult = {
    name: string;
    age: number;
    married: boolean;
    addr: {
      home: string;
      phone: string;
    };
    hobbies: [string, string];
    readonlyArr: readonly [string];
    fn: Function;
  };

  type cases = [Expect<Equal<ToPrimitive<PersonInfo>, ExpectedResult>>];
}
