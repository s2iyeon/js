const mylib = {};

// 함수를 Partial application으로 만들어주는 partial 메서드 추가
Function.prototype.partial = function(...preArgs){ // [100]
  const fn = this; // sum
  return function(...nextArgs){ // [20]
    const args = [...preArgs, ...nextArgs]; // [100, 20]
    return fn(...args); // sum(100, 20)
  };
};

// Child가 Parent를 상속받는다.
mylib.inherite = function(Parent, Child){
  // const F = new Function();
  // F.prototype = Parent.prototype;
  // Child.prototype = new F();

  // Object.create: 지정한 prototype 객체를 참조하는 객체 생성
  Child.prototype = Object.create(Parent.prototype);
};