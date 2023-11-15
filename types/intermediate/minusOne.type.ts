/**
 * Given a number (always positive) as a type. Your type should return the number decreased by one.
 */

type MakeNumberToArray<T extends number, U extends unknown[] = []> = U['length'] extends T
  ? U
  : MakeNumberToArray<T, [...U, 0]>;

type MinusOne<T extends number> = MakeNumberToArray<T> extends [infer R, ...infer U]
  ? R extends undefined
    ? 0
    : U['length']
  : never;

/**
 * test
 */
{
  type Zero = MinusOne<1>; // 0
  type FiftyFour = MinusOne<55>; // 54
  const rs1: Zero = 0;
  const rs2: FiftyFour = 54;
}
