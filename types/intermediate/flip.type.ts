/**
 * Implement the type of just-flip-object
 */
type Flip<T extends Record<PropertyKey, any>> = {
  [key in keyof T as `${T[key]}`]: key;
};

/**
 * test
 */
{
  type a = Flip<{ a: 'x'; b: 'y'; c: 'z' }>; // {x: 'a', y: 'b', z: 'c'}
  type b = Flip<{ a: 1; b: 2; c: 3 }>; // {1: 'a', 2: 'b', 3: 'c'}
  type c = Flip<{ a: false; b: true }>; // {false: 'a', true: 'b'}
  const rs1: a = { x: 'a', y: 'b', z: 'c' };
  const rs2: b = { 1: 'a', 2: 'b', 3: 'c' };
  const rs3: c = { false: 'a', true: 'b' };
}
