/**
 * Returns true if all elements of the list are equal to the second parameter passed in, false if there are any mismatches
 */

import { Equal, Expect } from 'types/checker.type';

type All<T extends unknown[], U extends unknown> = T extends [infer F, ...infer Rest]
  ? Equal<F, U> extends true
    ? All<Rest, U>
    : false
  : true;

/**
 * test
 */
{
  type Test1 = [1, 1, 1];
  type Test2 = [1, 1, 2];

  type Todo = All<Test1, 1>; // should be same as true
  type Todo2 = All<Test2, 1>; // should be same as false

  type cases = [
    Expect<Equal<All<[1, 1, 1], 1>, true>>,
    Expect<Equal<All<[1, 1, 2], 1>, false>>,
    Expect<Equal<All<['1', '1', '1'], '1'>, true>>,
    Expect<Equal<All<['1', '1', '1'], 1>, false>>,
    Expect<Equal<All<[number, number, number], number>, true>>,
    Expect<Equal<All<[number, number, string], number>, false>>,
    Expect<Equal<All<[null, null, null], null>, true>>,
    Expect<Equal<All<[[1], [1], [1]], [1]>, true>>,
    Expect<Equal<All<[{}, {}, {}], {}>, true>>,
    Expect<Equal<All<[never], never>, true>>,
    Expect<Equal<All<[any], any>, true>>,
    Expect<Equal<All<[unknown], unknown>, true>>,
    Expect<Equal<All<[any], unknown>, false>>,
    Expect<Equal<All<[unknown], any>, false>>,
    Expect<Equal<All<[1, 1, 2], 1 | 2>, false>>,
  ];
}
