// 첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다. 두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

function solution(numer1, denom1, numer2, denom2) {
    // 최소공배수(LCM) 구하기
    let lcm = (denom1 * denom2) / gcd(denom1, denom2);

    // 통분하여 새로운 분자 구하기
    let newNumer = (numer1 * (lcm / denom1)) + (numer2 * (lcm / denom2));

    // 기약 분수로 만들기 위해 분자와 분모의 최대공약수 구하기
    let commonDivisor = gcd(newNumer, lcm);

    // 약분된 분자와 분모 반환
    return [newNumer / commonDivisor, lcm / commonDivisor];
}