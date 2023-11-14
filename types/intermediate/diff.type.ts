/**
 * O & O1의 차이점인 객체를 가져옵니다
 */

type Diff<O, O1> = {
  [key in keyof O | keyof O1 as key extends keyof O1 & keyof O ? never : key]: key extends keyof O1
    ? O1[key]
    : key extends keyof O
    ? O[key]
    : never;
};

type Diff2<O, O1> = Omit<O & O1, keyof (O | O1)>;

/**
 * test
 */
{
  type Foo = {
    name: string;
    age: string;
  };
  type Bar = {
    name: string;
    age: string;
    gender: number;
  };
  type Coo = {
    name: string;
    gender: number;
  };
  type expected1 = Diff2<Foo, Bar>; // { gender : number }
  type expected2 = Diff<Bar, Foo>; // { gender : number }
  type expected3 = Diff<Foo, Coo>; // { age: string; gender: number }
  type expected4 = Diff<Coo, Foo>; // { age: string; gender: number }

  const rs1: expected1 = { gender: 1 };
  const rs2: expected2 = { gender: 2 };
  const rs3: expected3 = { age: '23', gender: 3 };
  const rs4: expected4 = { age: '25', gender: 5 };
}
