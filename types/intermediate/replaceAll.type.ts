/**
 * 주어진 문자열 S에서 부분 문자열 From을 찾아 모두 To로 교체하는 제네릭 ReplaceAll<S, From, To>을 구현하세요.
 */

type ReplaceAll<
  S extends string,
  F extends string,
  T extends string
> = F extends ""
  ? S
  : S extends `${infer _F}${F}${infer _L}`
  ? ReplaceAll<`${_F}${T}${_L}`, F, T>
  : S;

/**
 * test
 */

{
  type replaced = ReplaceAll<"t y p e s", " ", "">; // expected to be 'types'
}
