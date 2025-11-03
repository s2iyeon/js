(() => {
  /*
  반환값이 있는 함수 - 토스터
  */
  
  /**
   * 주어진 시간동안 빵을 구워서 토스트를 만드는 함수
   * @param {number} time - 토스트 굽는 시간(초)
   * @param {string} bread - 빵의 종류
   * @returns {string} - 구워진 토스트에 대한 설명 문자
   * @example
   * toaster(40, '우유 식빵') // returns '40초 동안 구워진 우유 식빵'
   */
  function toaster(time, bread){
    return time + '초 동안 구워진 ' + bread;
  }
  toaster.year = 2025; // object와 동일하게 사용 가능
  
  const toast1 = toaster(40, '우유 식빵');
  const toast2 = toaster(60);
  const toast3 = toaster(30, '우유 식빵', 40, '호밀빵');
  
  console.log(toast1); // 40초 동안 구워진 우유 식빵
  console.log(toast2); // 60초 동안 구워진 undefined
  console.log(toast3); // 30초 동안 구워진 우유 식빵
  
  console.log(toaster.year);
})();
