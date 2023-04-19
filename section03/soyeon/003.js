/*
문자와 숫자가 섞여있는 문자열이 주어지면 그 중 숫자만 추출하여 그 순서대로 자연수를 만듭니다.
만약 “tge0a1h205er”에서 숫자만 추출하면 0, 1, 2, 0, 5이고 이것을 자연수를 만들면 1205 이 됩니다.
추출하여 만들어지는 자연수는 100,000,000을 넘지 않습니다.

// 입력설명
첫 줄에 숫자가 섞인 문자열이 주어집니다. 문자열의 길이는 50을 넘지 않습니다.

// 출력설명
첫 줄에 자연수를 출력합니다.
*/
function solution(str) {
  let answer = 0;
  str = str.replace(/[^0-9]/g, ""); //숫자만 추출
  answer = parseInt(str); //문자열을 숫자로 변환

  return answer;
}

const testA = "g0en2T0s8eSoft";
console.log(solution(testA)); // 208

const testB = "abCD2g3de5";
console.log(solution(testB)); //235

const testC = "1ag3ds3feB9d0v2";
console.log(solution(testC)); //133902
