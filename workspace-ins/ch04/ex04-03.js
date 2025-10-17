/*
* 커링(Currying)
  - 여러개의 인자를 받는 함수를 단일 인자를 받는 함수의 체인으로 호출하도록 바꾸는 함수형 프로그래밍 기법 중 하나
  - `sum(x, y)` → `sum(x)(y)`
  - 함수형 프로그래밍 언어에 많은 공헌을 한 미국의 수학자, 논리학자인 하스켈 커리의 이름에서 따옴
  - 함수의 가독성, 재사용이 좋아짐
  - 마지막 인자가 입력될 때까지 함수의 실행 타이밍을 조절할 수 있음
*/

// 일반 함수
function sum(a, b, c){
  return a + b + c;
}

// 커링 함수
let currySum = function(a){
  return function(b){
    return function(c){
      return a + b + c;
    };
  };
};

currySum = (a) => (b) => (c) => a + b + c;
currySum = a => b => c => a + b + c;

// lodash의 _.curry() 함수 사용
currySum = _.curry(sum);

console.log(sum(10, 20, 30));
console.log(currySum(10)(20)(30));


