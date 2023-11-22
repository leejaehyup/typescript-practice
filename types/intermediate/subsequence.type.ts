// /**
//  * Given an array of unique elements, return all possible subsequences.
//  * A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements.
//  */

// import { Equal, Expect } from 'types/checker.type';

// type Subsequence<T extends unknown[], U extends unknown[] = []> = T extends [infer F, ...infer Rest]
//   ? Subsequence<Rest, [...U, [F], [...T]]>
//   : U[number] | [];

// /**
//  * test
//  */
// {
//   type A = Subsequence<[1, 2]>; // [] | [1] | [2] | [1, 2]

//   type cases = [
//     Expect<Equal<Subsequence<[1, 2]>, [] | [1] | [2] | [1, 2]>>,
//     Expect<Equal<Subsequence<[1, 2, 3]>, [] | [1] | [2] | [1, 2] | [3] | [1, 3] | [2, 3] | [1, 2, 3]>>,
//   ];
// }
