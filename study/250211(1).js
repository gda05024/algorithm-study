// 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다. 정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요. 최빈값이 여러 개면 -1을 return 합니다.

function solution(array) {
    var answer = 0;
    let num = {}
    for(let i = 0; i < array.length; i++) {
        let value = array[i]
        if(num[value]) {
            num[value] ++;
        } else {
            num[value] = 1;
        }
    }
    
    let maxCount = 0;
    let mode = -1;
    let duplicate = false;
    
    for (let key in num) {
        if(num[key] > maxCount) {
            maxCount = num[key];
            mode = key;
            duplicate = false;
        } else if(num[key] === maxCount) {
            duplicate = true;
        }
    }
    
    if (duplicate) {
        return -1;
    }
    
    
    return parseInt(mode);
}