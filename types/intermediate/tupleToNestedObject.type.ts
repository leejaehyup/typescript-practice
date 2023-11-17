/**
 * Given a tuple type T that only contains string type, and a type U, build an object recursively.
 */

type MakeObject<> = any;

type TupleToNestedObject<T, U, V = U> = T extends [...infer Rest, infer Last]
  ? V extends U
    ? TupleToNestedObject<
        Rest,
        U,
        {
          [key in Last & string]: U;
        }
      >
    : TupleToNestedObject<
        Rest,
        U,
        {
          [key in Last & string]: V;
        }
      >
  : V;

/**
 * best answer
 */
type TupleToNestedObject2<T, U> = T extends [infer F, ...infer R]
  ? {
      [K in F & string]: TupleToNestedObject<R, U>;
    }
  : U;

/**
 * test
 */
{
  type a = TupleToNestedObject<['a'], string>; // {a: string}
  type b = TupleToNestedObject<['a', 'b'], number>; // {a: {b: number}}
  type c = TupleToNestedObject<[], boolean>; // boolean. if the tuple is empty, just return the U type
  type d = TupleToNestedObject<['a', 'b', 'c', 'd', 'e'], number>; // {a: {b: number}}
}
