/**
 * 배열(튜플)을 받아 길이를 반환하는 제네릭 Length<T>를 구현하세요.
 */

// type Length<T extends PropertyKey[]> = T["length"];
type Length<T extends readonly PropertyKey[]> = "length" extends keyof T
  ? T["length"]
  : 0;

/**
 * test
 */
{
  type tesla = ["tesla", "model 3", "model X", "model Y"];
  type spaceX = [
    "FALCON 9",
    "FALCON HEAVY",
    "DRAGON",
    "STARSHIP",
    "HUMAN SPACEFLIGHT"
  ];

  type teslaLength = Length<tesla>; // expected 4
  type spaceXLength = Length<spaceX>; // expected 5
  const t: teslaLength = 4;
  const s: spaceXLength = 5;
}
