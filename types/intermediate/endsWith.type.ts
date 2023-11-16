/**
 * Implement EndsWith<T, U> which takes two exact string types and returns whether T ends with U
 */

type EndsWith<T extends string, U extends string> = T extends `${infer F}${U}` ? true : false;

/**
 * test
 */
{
  type a = EndsWith<'abc', 'bc'>; // expected to be true
  type b = EndsWith<'abc', 'abc'>; // expected to be true
  type c = EndsWith<'abc', 'd'>; // expected to be false
  type d = EndsWith<'abcde', 'de'>; // expected to be true
  const rs: a = true;
  const rs2: b = true;
  const rs3: c = false;
  const rs4: d = true;
}
