/*
    문제 설명
    정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요.
    단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요.
    예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

    제한 조건
    arr은 길이 1 이상인 배열입니다.
    인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.
    
    입출력 예
    arr	        return
    [4,3,2,1]	[4,3,2]
    [10]	    [-1]
 */

import java.util.ArrayList;
import java.util.Collections;

class Solution {
    public ArrayList<Integer> solution(int[] arr) {
        ArrayList<Integer> array = new ArrayList<>();
        if(arr.length == 1){
            array.add(-1);    
        }
        else{
            for(int a : arr){
                array.add(a);
            }
            array.remove(array.indexOf((Collections.min(array))));
        }
        return array;
    }
}

//  Collection.min(list) == 최소값 찾는 함수
//  list.indexOf(값) == 값이 몇 번째 index에 위치해있는지 찾아주는 함수
//  list.remove(인덱스 번호) == 인덱스 위치에 있는 값을 제거해주는 함수