/*
    문제 설명
    자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요.
    예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

    제한 조건
    n은 10,000,000,000이하인 자연수입니다.

    입출력 예
    n	    return
    12345	[5,4,3,2,1]
 */

/*
    수정
    class Solution {
        public long[] solution(long n) {
            String a = String.valueOf(n);
            long[] arr = new long[a.length()];

            for (int i = 0; i < a.length(); i++) {
                arr[i] = n % 10;
                n = n / 10;
            }
            return arr;
        }
    }   
    자리수만큼 반복문을 실행하면 10의 배수에서 문제가 발생할 수 있음
    int[]로 짜면 오류가 나고 long[] 으로 짜면 오류가 안나길래 형변환 때문에 생긴 문제인 줄 알았는데 아니었다
    왜 long[] 일때는 정상적으로 작동했는지 찾아봐야겠음
*/

class Solution {
    public int[] solution(long n) {
        String a = "" + n;
        int[] answer = new int[a.length()];
        int cnt = 0;

        while (n > 0) {
            answer[cnt] = (int) (n % 10);
            n /= 10;
            System.out.println(n);
            cnt++;
        }
        return answer;
    }
}

class Solution {
    public int[] solution(long n) {
        String a = String.valueOf(n);
        int[] arr = new int[a.length()];

        for (int i = 0; i < a.length(); i++) {
            if (n == 0)
                break; // n이 0이면 반복 중지
            arr[i] = (int) n % 10;
            n /= 10;
        }
        return arr;
    }
}

// 둘 중 하나쓰면 ㅇㅋ!!!