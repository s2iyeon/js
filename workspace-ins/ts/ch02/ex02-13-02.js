// ex02-13.js 복사

/*
* arguments 객체
  - 함수 내에서 arguments 변수로 접근 가능
  - 함수에 전달된 모든 인자값들을 담고 있는 컬렉션(유사 배열 객체)
  - 배열과 비슷하게 length 속성과 index로 각 인자값에 접근 가능
*/

function fn(n1, n2){
  // console.log(n1, n2, arguments);
  // 모든 인자값의 합계를 출력
  let sum = 0;

  for(let i=0; i<arguments.length; i++){
    sum += arguments[i];
  }

  console.log('합계', sum);
}

fn(10.1234, 20.678);
fn();
fn(10);
fn(10, 20, 30);
fn(10, 20, 30,234534,53,45,345,34,53,45,34,6456,7,345,345,6345,7);
