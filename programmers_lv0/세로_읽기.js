function solution(my_string, m, c) {
  var answer = '';
  for (let i = 0; i < my_string.length; i += m) {
    answer += my_string.slice(i, i + m)[c - 1];
  }
  return answer;
}

console.log(solution('programmers', 1, 1));
