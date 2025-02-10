// 특정 작업을 달성하기 위한 과정
// 1. 질문을 받으면 내 방식대로 다시 생각해봐야한다.
// 2. 문제에 해당하는 입력값은 무엇인가요?
// 3. 출력값의 형태는 어떻게 되어야할까요?
// 4. 문제의 일부인 중요한 데이터의 라벨을 어떻게 지정해야할까요?

// 정수 num1과 num2가 매개변수로 주어질 때, num1을 num2로 나눈 값에 1,000을 곱한 후 정수 부분을 return 하도록 solution 함수를 완성해주세요


function solution(num1, num2) {
    var answer = 0;
    answer = Math.trunc(num1 / num2 * 1000)
    return answer;
}

// trunc 메서드는 소수점 이하를 버리는 메서드이다.


