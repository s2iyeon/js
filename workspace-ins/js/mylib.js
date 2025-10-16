const mylib = {};

// Child가 Parent를 상속받는다.
mylib.inherite = function(Parent, Child){
  // const F = new Function();
  // F.prototype = Parent.prototype;
  // Child.prototype = new F();

  // Object.create: 지정한 prototype 객체를 참조하는 객체 생성
  Child.prototype = Object.create(Parent.prototype);
};