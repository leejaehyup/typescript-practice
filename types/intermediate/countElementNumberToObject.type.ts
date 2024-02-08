/**
 * With type CountElementNumberToObject, get the number of occurrences of every item from an array and return them in an object.
 */

import { Equal, Expect } from 'types/checker.type';

type Flatten<T, R extends any[] = []> = T extends [infer F, ...infer L]
  ? [F] extends [never]
    ? Flatten<L, R>
    : F extends any[]
    ? Flatten<L, [...R, ...Flatten<F>]>
    : Flatten<L, [...R, F]>
  : R;

type CountElementNumberToObject<
  T extends unknown[],
  U extends any[] = Flatten<T>,
  R extends Record<any, unknown[]> = { [K in U[number]]: [] },
> = U extends [infer F, ...infer Rest]
  ? CountElementNumberToObject<T, Rest, { [K in keyof R]: K extends F ? [...R[K], unknown] : R[K] }>
  : {
      [K in keyof R]: R[K]['length'];
    };

/**
 * test
 */
{
  type Simple1 = CountElementNumberToObject<[never]>; // return {}
  type Simple2 = CountElementNumberToObject<[1, 2, 3, 4, 5]>;

  type Simple3 = CountElementNumberToObject<[1, 2, 3, 4, 5, [1, 2, 3]]>;

  type cases = [
    Expect<
      Equal<
        CountElementNumberToObject<[1, 2, 3, 4, 5]>,
        {
          1: 1;
          2: 1;
          3: 1;
          4: 1;
          5: 1;
        }
      >
    >,
    Expect<
      Equal<
        CountElementNumberToObject<[1, 2, 3, 4, 5, [1, 2, 3]]>,
        {
          1: 2;
          2: 2;
          3: 2;
          4: 1;
          5: 1;
        }
      >
    >,
    Expect<
      Equal<
        CountElementNumberToObject<[1, 2, 3, 4, 5, [1, 2, 3, [4, 4, 1, 2]]]>,
        {
          1: 3;
          2: 3;
          3: 2;
          4: 3;
          5: 1;
        }
      >
    >,
    Expect<Equal<CountElementNumberToObject<[never]>, {}>>,
    Expect<
      Equal<
        CountElementNumberToObject<['1', '2', '0']>,
        {
          0: 1;
          1: 1;
          2: 1;
        }
      >
    >,
    Expect<
      Equal<
        CountElementNumberToObject<['a', 'b', ['c', ['d']]]>,
        {
          a: 1;
          b: 1;
          c: 1;
          d: 1;
        }
      >
    >,
  ];
}
