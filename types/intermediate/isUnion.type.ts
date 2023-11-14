/**
 * T를 입력으로 받고, T가 Union 유형으로 확인되는지 여부를 반환하는 IsUnion을 구현하세요
 * 
 * 
type IsUnionDebug<T extends any, TT extends any = T> = T extends any
  ? TT extends T
    ? `'${TT}' extends '${T}'`
    : `'${TT}' doesn't extends '${T}'`
  : never;

type experiment = IsUnionDebug<'a' | 'b' | 'c'>;

 */

type IsUnion<T, TT = T> = (T extends T ? (TT extends T ? true : false) : never) extends true ? false : true;
/**
 * 
IsUnion<string|number>
=> IsUnionImpl<string|number, string|number>
=> (string|number extends string|number ? string|number extends string|number ? true : unknown : never) extends true ? false : true
=> (
  (string extends string|number ? string|number extends string ? true : unknown : never) |
  (number extends string|number ? string|number extends number ? true : unknown : never)
) extends true ? false : true
=> (
  (string|number extends string ? true : unknown) |
  (string|number extends number ? true : unknown)
) extends true ? false : true
=> (
  (
    (string extends string ? true : unknown) |
    (number extends string ? true : unknown)
  ) |
  (
    (string extends number ? true : unknown) |
    (number extends number ? true : unknown)
  )
) extends true ? false : true
=> (
  (
    (true) |
    (unknown)
  ) |
  (
    (unknown) |
    (true)
  )
) extends true ? false : true
=> (true|unknown) extends true ? false : true
=> (unknown) extends true ? false : true
=> true
 */

/**
 * test
 */
{
  type case1 = IsUnion<string>; // false
  type case2 = IsUnion<string | number>; // true
  type case3 = IsUnion<[string | number]>; // false
  const rs1: case1 = false;
  const rs2: case2 = true;
  const rs3: case3 = false;
}
