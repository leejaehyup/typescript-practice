/**
 * Implement CapitalizeWords<T> which converts the first letter of each word of a string to uppercase and leaves the rest as-is.
 *
 * tip : 특수문자 판별 -> Lowercase<S>, Uppercase<S> 이 같은지 비교
 */

import { Equal, Expect } from 'types/checker.type';

type CapitalizeWords<T extends string, R extends string = ''> = T extends `${infer F}${infer S}`
  ? Uppercase<F> extends Lowercase<F>
    ? `${Capitalize<`${R}${F}`>}${CapitalizeWords<S>}`
    : CapitalizeWords<S, `${R}${F}`>
  : Capitalize<R>;

/**
 * test
 */
{
  type capitalized = CapitalizeWords<'foo bar.hello,world'>; // expected to be 'Hello World, My Friends'

  type cases = [
    Expect<Equal<CapitalizeWords<'foobar'>, 'Foobar'>>,
    Expect<Equal<CapitalizeWords<'FOOBAR'>, 'FOOBAR'>>,
    Expect<Equal<CapitalizeWords<'foo bar'>, 'Foo Bar'>>,
    Expect<Equal<CapitalizeWords<'foo bar hello world'>, 'Foo Bar Hello World'>>,
    Expect<Equal<CapitalizeWords<'foo bar.hello,world'>, 'Foo Bar.Hello,World'>>,
    Expect<
      Equal<
        CapitalizeWords<'aa!bb@cc#dd$ee%ff^gg&hh*ii(jj)kk_ll+mm{nn}oo|pp🤣qq'>,
        'Aa!Bb@Cc#Dd$Ee%Ff^Gg&Hh*Ii(Jj)Kk_Ll+Mm{Nn}Oo|Pp🤣Qq'
      >
    >,
    Expect<Equal<CapitalizeWords<''>, ''>>,
  ];
}
