import { Equal, Expect } from 'types/checker.type';

/**
 * There is a function in C language: printf. This function allows us to print something with formatting. Like this:
 * printf("The result is %d.", 42);
 * This challenge requires you to parse the input string and extract the format placeholders like %d and %f.
 * For example, if the input string is "The result is %d.", the parsed result is a tuple ['dec'].
 *
 */
type ControlsMap = {
  c: 'char';
  s: 'string';
  d: 'dec';
  o: 'oct';
  h: 'hex';
  f: 'float';
  p: 'pointer';
};
type ParsePrintFormat<S extends string, R extends unknown[] = []> = S extends `${string}%${infer L}${infer LL}`
  ? L extends keyof ControlsMap
    ? ParsePrintFormat<`${LL}`, [...R, ControlsMap[L]]>
    : ParsePrintFormat<`${LL}`, [...R]>
  : R;

{
  type s = ParsePrintFormat<'The result is %%d.'>;
  type cases = [
    Expect<Equal<ParsePrintFormat<''>, []>>,
    Expect<Equal<ParsePrintFormat<'Any string.'>, []>>,
    Expect<Equal<ParsePrintFormat<'The result is %d.'>, ['dec']>>,
    Expect<Equal<ParsePrintFormat<'The result is %%d.'>, []>>,
    Expect<Equal<ParsePrintFormat<'The result is %%%d.'>, ['dec']>>,
    Expect<Equal<ParsePrintFormat<'The result is %f.'>, ['float']>>,
    Expect<Equal<ParsePrintFormat<'The result is %h.'>, ['hex']>>,
    Expect<Equal<ParsePrintFormat<'The result is %q.'>, []>>,
    Expect<Equal<ParsePrintFormat<'Hello %s: score is %d.'>, ['string', 'dec']>>,
    Expect<Equal<ParsePrintFormat<'The result is %'>, []>>,
  ];
}
