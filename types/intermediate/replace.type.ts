/**
 * 문자열 S에서 From를 찾아 한 번만 To로 교체하는 Replace<S, From, To>를 구현하세요.
 */

type Replace<
  S extends string,
  F extends string,
  T extends string
> = F extends ""
  ? S
  : S extends `${infer _F}${F}${infer _L}`
  ? `${_F}${T}${_L}`
  : S;

/**
 * test
 */

{
  type replaced = Replace<"types are fun!", "fun", "awesome">; // expected to be 'types are awesome!'
  const rs: replaced = "types are awesome!";
}
