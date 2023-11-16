/**
 * Implement StartsWith<T, U> which takes two exact string types and returns whether T starts with U
 */

type StartsWith<T extends string, U extends string> = T extends `${U}${string}` ? true : false;

/**
 * test
 */
{
  type a = StartsWith<'abc', 'ac'>; // expected to be false
  type b = StartsWith<'abc', 'ab'>; // expected to be true
  type c = StartsWith<'abc', 'abcd'>; // expected to be false
  const rs: a = false;
  const rs2: b = true;
  const rs3: c = false;
}
