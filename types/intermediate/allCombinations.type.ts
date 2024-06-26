/**
 * Implement type AllCombinations<S> that return all combinations of strings which use characters from S at most once.
 */

type StringToUnion<S extends string, V extends any[] = []> = S extends `${infer First}${infer Rest}`
  ? StringToUnion<Rest, [...V, First]>
  : V[number];

type AllCombinations<S extends string, unionStr extends string = StringToUnion<S>> = [unionStr] extends [never]
  ? ''
  :
      | ''
      | {
          [key in unionStr]: `${key}${AllCombinations<Exclude<unionStr, key>>}`;
        }[unionStr];

/**
 * test
 */
{
  type AllCombinations_ABC = AllCombinations<'ABC'>;
  // should be '' | 'A' | 'B' | 'C' | 'AB' | 'AC' | 'BA' | 'BC' | 'CA' | 'CB' | 'ABC' | 'ACB' | 'BAC' | 'BCA' | 'CAB' | 'CBA'
}
