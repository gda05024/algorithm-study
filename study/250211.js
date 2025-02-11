// 중앙값은 어떤 주어진 값들을 크기의 순서대로 정렬했을 때 가장 중앙에 위치하는 값을 의미합니다. 예를 들어 1, 2, 7, 10, 11의 중앙값은 7입니다. 정수 배열 array가 매개변수로 주어질 때, 중앙값을 return 하도록 solution 함수를 완성해보세요.

function solution(array) {
    // 숫자를 오름 차순으로 정렬
    let answer = array.sort((a, b) => a - b);
    
    // 중앙값의 위치는 배열의 길이의 절반이다.
    answerPos = Math.floor(array.length / 2)
    
    // 배열에서 중앙값 가져오기
    answer = array[answerPos]
  
    return answer;
}



// function solution(array) {
//   return array.sort((a, b) => a - b)[Math.floor(array.length / 2)];
// }