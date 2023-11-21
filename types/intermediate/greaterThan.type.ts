/**
 * In This Challenge, You should implement a type GreaterThan<T, U> like T > U
 * Negative numbers do not need to be considered.
 */

type GreaterThan<T extends number, U extends number> = MakeNumberToArray<T> extends [
  ...MakeNumberToArray<U>,
  ...infer _,
]
  ? _['length'] extends 0
    ? false
    : true
  : false;

/**
 * test
 */
{
  type a = GreaterThan<2, 1>; //should be true
  type b = GreaterThan<1, 1>; //should be false
  type c = GreaterThan<10, 100>; //should be false
  type d = GreaterThan<111, 11>; //should be true
  const rs1: a = true;
  const rs2: b = false;
  const rs3: c = false;
  const rs4: d = true;
}
