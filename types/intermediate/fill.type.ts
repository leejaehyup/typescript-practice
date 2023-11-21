import { Equal, Expect } from 'types/checker.type';

/**
 * Fill, a common JavaScript function,
 * now let us implement it with types.
 * Fill<T, N, Start?, End?>, as you can see,Fill accepts four types of parameters,
 * of which T and N are required parameters, and Start and End are optional parameters.
 * The requirements for these parameters are: T must be a tuple, N can be any type of value, Start and End must be integers greater than or equal to 0.
 */
type GreaterThanOrEqual<T extends number, U extends number> = MakeNumberToArray<T> extends [
  ...MakeNumberToArray<U>,
  ...infer _,
]
  ? true
  : false;

type Fill<
  T extends unknown[],
  N extends unknown,
  Start extends number = 0,
  End extends number = T['length'],
  R extends unknown[] = [],
> = T extends [infer F, ...infer Rest]
  ? GreaterThanOrEqual<R['length'], Start> extends true
    ? GreaterThanOrEqual<R['length'], End> extends true
      ? Fill<Rest, N, Start, End, [...R, F]>
      : Fill<Rest, N, Start, End, [...R, N]>
    : Fill<Rest, N, Start, End, [...R, F]>
  : R;

/**
 * test
 */
{
  type exp = Fill<[1, 2, 3], 0>; // expected to be [0, 0, 0]
  const rs1: exp = [0, 0, 0];

  type cases = [
    Expect<Equal<Fill<[], 0>, []>>,
    Expect<Equal<Fill<[], 0, 0, 3>, []>>,
    Expect<Equal<Fill<[1, 2, 3], 0, 0, 0>, [1, 2, 3]>>,
    Expect<Equal<Fill<[1, 2, 3], 0, 2, 2>, [1, 2, 3]>>,
    Expect<Equal<Fill<[1, 2, 3], 0>, [0, 0, 0]>>,
    Expect<Equal<Fill<[1, 2, 3], true>, [true, true, true]>>,
    Expect<Equal<Fill<[1, 2, 3], true, 0, 1>, [true, 2, 3]>>,
    Expect<Equal<Fill<[1, 2, 3], true, 1, 3>, [1, true, true]>>,
    Expect<Equal<Fill<[1, 2, 3], true, 10, 0>, [1, 2, 3]>>,
    Expect<Equal<Fill<[1, 2, 3], true, 10, 20>, [1, 2, 3]>>,
    Expect<Equal<Fill<[1, 2, 3], true, 0, 10>, [true, true, true]>>,
  ];
}
