function solution(a, b) {
    a = a.toString();
    b = b.toString();
    return a + b > b + a ? parseInt(a + b) : parseInt(b + a);
}