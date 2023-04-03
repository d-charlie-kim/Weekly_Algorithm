// # 가운데 문자 출력

// ## 소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램을 작성하세요 (단, 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력)

// ## 첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않는다.
// ## 첫 줄에 가운데 문자를 출력한다.

// ## study ==> u
// ## good ==> oo

function solution(str) {
  let answer = "";
  if (str.length % 2 == 1) {
    answer += str[Math.round(str.length / 2 - 1)];
  } else {
    answer += str[str.length / 2 - 1] + str[str.length / 2];
  }
  return answer;
}
// console.log(solution("good"));
