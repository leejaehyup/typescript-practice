/**
 * The Block, Element, Modifier methodology (BEM) is a popular naming convention for classes in CSS.
 * For example, the block component would be represented as btn, element that depends upon the block would be represented as btn__price, modifier that changes the style of the block would be represented as btn--big or btn__price--warning.
 * Implement BEM<B, E, M> which generate string union from these three parameters.
 * Where B is a string literal, E and M are string arrays (can be empty).
 */

import { Equal, Expect } from 'types/checker.type';

type BEM<B extends string, E extends any[], M extends any[]> = `${B}${E extends []
  ? ''
  : `__${E[number]}`}${M extends [] ? '' : `--${M[number]}`}`;

/**
 * test
 */
{
  type a = BEM<'btn', ['price'], []>;
  type b = BEM<'btn', ['price'], ['warning', 'success']>;
  type c = BEM<'btn', [], ['small', 'medium', 'large']>;
  type cases = [
    Expect<Equal<BEM<'btn', ['price'], []>, 'btn__price'>>,
    Expect<Equal<BEM<'btn', ['price'], ['warning', 'success']>, 'btn__price--warning' | 'btn__price--success'>>,
    Expect<Equal<BEM<'btn', [], ['small', 'medium', 'large']>, 'btn--small' | 'btn--medium' | 'btn--large'>>,
  ];
}
