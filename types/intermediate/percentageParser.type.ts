/**
 * PercentageParser을 구현하세요.
 * /^(\+|\-)?(\d*)?(\%)?$/ 정규식에 따라 T를 일치시키고 3개의 일치 요소를 얻습니다
 * 구조는 [더하기 혹은 빼기, 숫자,단위]와 같아야 합니다.
 * 일치 요소가 없다면, 기본값은 빈 문자열입니다.
 */
type CheckSymbol<T> = T extends '+' | '-' ? T : '';

type CheckDigit<T> = T extends `${infer digit}%` ? [digit, '%'] : [T, ''];

type PercentageParser<T extends string> = T extends `${infer First}${infer Rest}`
  ? CheckSymbol<First> extends First
    ? [CheckSymbol<First>, ...CheckDigit<Rest>]
    : ['', ...CheckDigit<T>]
  : [CheckSymbol<T>, ...CheckDigit<T>];

/**
 * test
 */
{
  type PString1 = '';
  type PString2 = '+85%';
  type PString3 = '-85%';
  type PString4 = '85%';
  type PString5 = '85';

  type R1 = PercentageParser<PString1>; // expected ['', '', '']
  type R2 = PercentageParser<PString2>; // expected ["+", "85", "%"]
  type R3 = PercentageParser<PString3>; // expected ["-", "85", "%"]
  type R4 = PercentageParser<PString4>; // expected ["", "85", "%"]
  type R5 = PercentageParser<PString5>; // expected ["", "85", ""]
  const rs1: R1 = ['', '', ''];
  const rs2: R2 = ['+', '85', '%'];
  const rs3: R3 = ['-', '85', '%'];
  const rs4: R4 = ['', '85', '%'];
  const rs5: R5 = ['', '85', ''];
}
