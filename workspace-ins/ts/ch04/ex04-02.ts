(() => {
  /*
  * 클로저를 활용한 캡슐화 구현
    - 객체 내부에서만 접근 가능한 속성을 만들어 사용하고 외부에서는 해당 속성을 직접 접근하지 못하도록 만드는 객체지향 언어의 특징
    - 함수 내부에서 선언한 지역변수는 외부에서 접근하지 못하는 반면 내부 함수인 클로저에서는 접근 가능하다는 특징을 이용해서 구현
  */
  
  // count 속성과 ride(), getCount() 메서드 작성
  const Counter = function(){
    let count = 0;
    this.ride = function(){
      if(count < 40){
        count++;
      }else{
        console.log('정원 초과!!!');
      }
    };
    this.getCount = function(){
      return count;
    };
  };
  
  const c = new Counter();
  c.ride();
  c.ride();
  
  for(let i=0; i<40; i++){
    c.ride();
  }
  
  // c.count += 40;
  
  console.log('전체 탑승자', c.getCount());
})();
