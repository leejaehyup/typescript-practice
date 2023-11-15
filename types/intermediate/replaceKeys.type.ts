/**
 * Union type의 key를 대체하는 ReplaceKeys를 구현하세요.
 * 만약 일부 유형에 해당 key가 존재하지 않는다면 대체하지 않습니다. 타입은 세 개의 인자를 받습니다.
 */

type ReplaceKeys<T, K, V> = T extends T
  ? { [key in keyof T]: key extends K ? (key extends keyof V ? V[key] : never) : T[key] }
  : never;

/**
 * test
 */
{
  type NodeA = {
    type: 'A';
    name: string;
    flag: number;
  };

  type NodeB = {
    type: 'B';
    id: number;
    flag: number;
  };

  type NodeC = {
    type: 'C';
    name: string;
    flag: number;
  };

  type Nodes = NodeA | NodeB | NodeC;

  type ReplacedNodes = ReplaceKeys<Nodes, 'name' | 'flag', { name: number; flag: string }>; // {type: 'A', name: number, flag: string} | {type: 'B', id: number, flag: string} | {type: 'C', name: number, flag: string} // would replace name from string to number, replace flag from number to string.

  type ReplacedNotExistKeys = ReplaceKeys<Nodes, 'name', { aa: number }>; // {type: 'A', name: never, flag: number} | NodeB | {type: 'C', name: never, flag: number} // would replace name to never

  //   const rs : ReplacedNodes =
}
