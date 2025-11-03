(() => {
  const form = document.querySelector('form');
  const div = document.querySelector('div');
  const p = document.querySelector('p');
  
  form.addEventListener('click', () => {
    console.log('1 form 클릭');
  }, true); // useCapture 생략하면 false(버블링), true로 지정하면 캡처링 단계에서 사용
  
  div.addEventListener('click', () => {
    console.log('  2 div 클릭');
  }, true);
  
  p.addEventListener('click', (e) => {
    console.log('    3 p 클릭');
    e.stopPropagation(); // 이벤트 전파 중지
  });
  
  div.addEventListener('click', () => {
    console.log('  4 div 클릭');
  });
  
  form.addEventListener('click', () => {
    console.log('5 form 클릭');
  });
})();
