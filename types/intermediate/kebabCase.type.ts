/**
 * camelCase나 PascalCase를 kebab-case 문자열로 수정하세요.
 * FooBarBaz -> foo-bar-baz
 */

type KebabCase<T extends string> = T extends `${infer First}${infer Rest}`
  ? Rest extends Uncapitalize<Rest>
    ? `${Uncapitalize<First>}${KebabCase<Rest>}`
    : `${Uncapitalize<First>}-${KebabCase<Rest>}`
  : T;

/**
 * test
 */
{
  type FooBarBaz = KebabCase<'FooBarBaz'>;
  const foobarbaz: FooBarBaz = 'foo-bar-baz';

  type DoNothing = KebabCase<'do-nothing'>;
  const doNothing: DoNothing = 'do-nothing';
}
