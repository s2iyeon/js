/*
매개변수를 가진 함수
*/

/**
 * 이름을 전달 받아서 'Hello'와 함께 인사말을 출력하는 함수
 * @param {string} name - 사용자 이름
 */
function sayHello(name) { // var name; // string name이면 스트링만 써야 하나?
  console.log('Hello', name); // 투어퍼케이스 쓴 상태에서 괄호면 에러남
}

sayHello(); // 괄호에 안 넣으면 언디파인드 나옴 30번이랑 왜 다름? 걘 괄호 비어있는데
sayHello('하츄핑');
sayHello('초롱핑');
sayHello('조아핑');

