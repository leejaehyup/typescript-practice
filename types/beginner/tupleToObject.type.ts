/**
 * 배열(튜플)을 받아, 각 원소의 값을 key/value로 갖는 오브젝트 타입을 반환하는 타입을 구현하세요.
 */

type TupleToObject<T extends readonly PropertyKey[]> = {
  [key in T[number]]: key;
};
/**
 * test
 */
{
  const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

  type result = TupleToObject<typeof tuple>; // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
  const obj: result = {
    tesla: "tesla",
    "model 3": "model 3",
    "model X": "model X",
    "model Y": "model Y",
  };
}
