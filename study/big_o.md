## big o 표기법 필요성
- 우리가 만나는 알고리즘의 해결법은 여러개 존재 -> 어떤 것이 좋은지 비교하고 판단하기 위한 것임

- What does better mean?
* faster? ⭕️
* less memory?
* more readable?

### 어떻게 평가할 건데?
컴퓨터가 처리해야하는 연산 갯수를 세면 된다.

function addUpTo(n) {
    return n * (n + 1) / 2;
}

-> 코드는 컴퓨터가 연산하는 수는 3번이다.

function addUpTo(n) {
    let total = 0;
    for (let i = 0; i < n; i++) {
        total += i;
    }
    return total;
}

-> 코드는 컴퓨터가 연산하는 수는 n번에 따라 + 연산이 증가한다.
-> n이 커질 수록 연산이 for문때문에 들어난다.

### 상식 
* n이 커질수록, 무한대까지 가면서 입력이 커진다.

###  시간복잡도
* 입력이 커질 수록 알고리즘의 실행 속도가 어떻게 바뀌는지 측정

O(n)

O(1)

O(n)²


### 공간복잡도
* 입력이 커질 수록 알고리즘이 얼마나 많은 공간을 차지 하는지 측정 (메모리)
* boolean, number, undefined, null은 자바스크립트에서 모두 불변의 공간이다. -> 입력의 크기와 상관 없이, 숫자가 1이든 1000000이든 불변 공간이라고 뜻한다.

logarithms