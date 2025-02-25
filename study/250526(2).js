//정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.

function solution(n) {
    let list = []; // list 배열을 먼저 초기화
    for (let i = 2; i <= n; i += 2) { // 짝수만 더하기 위해 2부터 시작하고 2씩 증가
        list.push(i);
    }
    return list.reduce((a, b) => a + b, 0); // 배열의 값을 모두 더함
}

console.log(solution(10));