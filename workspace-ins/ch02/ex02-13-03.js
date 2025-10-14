// ex02-13-02.js 복사

/*
* 나머지 매개변수 (Rest parameters)
  - 정해지지 않은 수의 매개변수를 배열로 전달 받음
  - 함수의 마지막 매개변수 앞에 ... 을 붙임
* 기본값 매개변수 (Default parameters)
  - 함수 호출시 인자값을 전달하지 않으면 undefined가 되지만 이때 다른 값으로 초기화 시키고 싶을 경우
  - 매개변수 뒤에  "= 초기값" 형태로 작성
*/

function fn(n1=0, n2=0, ...nums){
  console.log(n1, n2, nums);
  // 모든 인자값의 합계를 출력
  let sum = n1 + n2;

  for(let i=0; i<nums.length; i++){
    sum += nums[i];
  }

  console.log('합계', sum);
}

fn(10.1234, 20.678);
fn();
fn(10);
fn(10, 20, 30);
fn(10, 20, 30,234534,53,45,345,34,53,45,34,6456,7,345,345,6345,7);
