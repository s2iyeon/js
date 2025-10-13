/*
변수 선언문 var, let, const
*/

/**
 * 지정한 두 수의 최대값을 반환한다.
 * @param {number} n1 
 * @param {number} n2 
 * @returns {number} - 최대값
 */
function max(n1, n2) {
  // var result = 0;
  if (n1 > n2) {
    // result에 n1 지정
    var result = n1;
  } else {
    // result에 n2 지정
    var result = n2;
  }

  return result;
}

// let 사용
function max(n1, n2) {
let result;
if (n1 > n2) {
    result = n1;
  } else {
    result = n2;
  }

return result;
}

// const 사용
function max(n1, n2) {
  let result; // const 사용 불가
  // const result = 0; // 선언과 동시에 반드시 초기화 필요
if (n1 > n2) {
    result = n1;
  } else {
    result = n2;
  }

return result;
}


console.log(max(10, 20)); // 20
console.log(max(200, 30)); // 200


