/**
 * Implement a type that extract prop value to the interface.
 * The type takes the two arguments.
 * The output should be an object with the prop values. Prop value is object.
 */

import { Equal, Expect } from 'types/checker.type';

type ExtractToObject<T extends object, U extends keyof T> = Omit<Omit<T, U> & T[U], never>;

/**
 * test
 */
{
  type Test = { id: '1'; myProp: { foo: '2' } };
  type Result = ExtractToObject<Test, 'myProp'>; // expected to be { id: '1', foo: '2' }

  type test1 = { id: '1'; myProp: { foo: '2' } };

  type testExpect1 = {
    id: '1';
    foo: '2';
  };

  type test2 = {
    id: '1';
    prop1: { zoo: '2' };
    prop2: { foo: '4' };
  };

  type testExpect2 = {
    id: '1';
    prop1: { zoo: '2' };
    foo: '4';
  };

  type test3 = {
    prop1: { zoo: '2'; a: 2; b: 4; c: 7 };
    prop2: { foo: '4'; v: 2; d: 4; g: 7 };
    k: 289;
  };

  type testExpect3 = {
    zoo: '2';
    a: 2;
    b: 4;
    c: 7;
    prop2: { foo: '4'; v: 2; d: 4; g: 7 };
    k: 289;
  };

  type test4 = { id: '1'; myProp: { foo: '2' } };

  type testExpect4 = {
    id: '1';
    myProp: { foo: '2' };
  };

  type cases = [
    Expect<Equal<ExtractToObject<test1, 'myProp'>, testExpect1>>,
    Expect<Equal<ExtractToObject<test2, 'prop2'>, testExpect2>>,
    Expect<Equal<ExtractToObject<test3, 'prop1'>, testExpect3>>,
    // @ts-expect-error
    Expect<Equal<ExtractToObject<test4, 'prop4'>, testExpect4>>,
  ];
}
