/*
    문제 설명
    문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string의 뒤의 n글자로 이루어진 문자열을 return 하는 solution 함수를 작성해 주세요.

    제한사항
    my_string은 숫자와 알파벳으로 이루어져 있습니다.
    1 ≤ my_string의 길이 ≤ 1,000
    1 ≤ n ≤ my_string의 길이
    
    입출력 예
    my_string	n	result
    "ProgrammerS123"	11	"grammerS123"
    "He110W0r1d"	5	"W0r1d"

    예제 1번의 my_string에서 뒤의 11글자는 "grammerS123"이므로 이 문자열을 return 합니다.
    예제 2번의 my_string에서 뒤의 5글자는 "W0r1d"이므로 이 문자열을 return 합니다.
*/
function solution(my_string, n) {
    var answer = '';
    var arr = [];
    
    for(var i = my_string.length-1; i>=my_string.length - n; i-- ){
        arr[i] = my_string[i];        
    }
    // console.log(arr)
    for(var i = 0 ; i < arr.length; i++){
        if(arr[i] != undefined)
        answer += arr[i];
        
    }
    return answer;
}

//다른 사람 코드
/*
    .slice() => 배열이나 문자열에서 특정 부분을 추출하는 메서드
    시작 인덱스부터 종료 인덱스 전까지의 부분을 추출
    음수 값을 사용할 경우 끝에서 부터의 인덱스를 나타냄

    str.slice(7); => 7부터 끝까지
    str.slice(7, 12); => 7부터 12 전까지
    str.slice(-6) => 끝에서부터 6번째 까지

*/
function solution(my_string, n) {
    //my_string을 끝에서부터 n까지 반환
//  1)
    return my_string.slice(-n)
// 2)
    var answer = my_string.slice(-1*n);
    return answer;
    
}

/*
    .substring()
    substring(startIndex, endIndex) 형식으로 사용되며,
    시작 인덱스 startIndex부터 종료 인덱스 endIndex 전까지의 부분 문자열을 반환
    만약 startIndex가 endIndex보다 크다면, 두 값을 교환하여 처리
*/
function solution(my_string, n) {
    //length - n의 위치부터 반환
    return my_string.substring(my_string.length - n);
}