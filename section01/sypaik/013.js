// # 대소문자 변환

// ## 대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자는 소문자로 소문자는 대문자로 변환하여 출력하는 프로그램 작성

// ## 첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않는다.
// ## 첫 줄에 대문자는 소문자로, 소문자는 대문자로 변환된 문자열을 출력한다.

// # StuDY ==> sTUdy

function solution(str) {
  let answer = "";
  for (let x of str) {
    if (x == x.toUpperCase()) {
      answer += x.toLowerCase();
    } else {
      answer += x.toUpperCase();
    }
  }
  return answer;
}

// let string = "StuDY";
// console.log(solution(string));
