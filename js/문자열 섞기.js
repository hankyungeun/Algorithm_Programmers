/*
    문제 설명
    길이가 같은 두 문자열 str1과 str2가 주어집니다.
    두 문자열의 각 문자가 앞에서부터 서로 번갈아가면서 한 번씩 등장하는 문자열을 만들어 return 하는 solution 함수를 완성해 주세요.

    제한사항
    1 ≤ str1의 길이 = str2의 길이 ≤ 10
    str1과 str2는 알파벳 소문자로 이루어진 문자열입니다.

    입출력 예
    str1	str2	result
    "aaaaa"	"bbbbb"	"ababababab"
*/

function solution(str1, str2) {
    var answer = '';
    for(let i = 0; i < str1.length; i++) {
        answer += str1[i] + str2[i];
    }
    return answer;
}

/*
    str길이가 str1 = str2여서 for저렇게 해결했지만 두 문자열의 길이가 다를 때는 어떻게 해야하지
    Chat GPT : 
        만약 입력으로 주어진 두 문자열 str1과 str2의 길이가 다르다면, 두 문자열을 같은 길이로 맞춰야 합니다.
        이를 위해 더 긴 문자열의 길이에 맞추어 짧은 문자열을 반복하여 이어붙이는 방법을 사용할 수 있습니다.       
 */
    function solution(str1, str2) {
        let result = '';
    
        // 두 문자열의 길이가 같은 경우
        if (str1.length === str2.length) {
            for (let i = 0; i < str1.length; i++) {
                result += str1[i] + str2[i];
            }
        } else {
            // 두 문자열 중 더 긴 문자열에 맞추어 짧은 문자열을 반복해서 이어붙임
            const [shortStr, longStr] = str1.length > str2.length ? [str2, str1] : [str1, str2];
            const lenDiff = longStr.length - shortStr.length;
            result = shortStr + longStr.slice(-lenDiff);
        }
    
        return result;
    }