(() => {
  const a = document.querySelector('a');
  const img = document.querySelector('img');
  const input = document.querySelector('input');
  
  // 표준 속성 접근
  console.log(a.href); // https://samg.net/samg_contents/catch_teenieping2
  console.log(img.src);
  console.log(img.width);
  console.log(input.type);
  console.log(input.name);
  
  // 커스텀 속성 접근
  console.log(img.format); // undefined
  console.log(img.getAttribute('format')); // png
  
  // 커스텀 속성 접근
  console.log(img['data-age']); // undefined
  console.log(img['data-user-name']); // undefined
  
  console.log(img.getAttribute('data-age'));
  console.log(img.getAttribute('data-user-name'));
  
  console.log(img.dataset.age);
  console.log(img.dataset.userName);
  
  img.dataset.address = '서울시';
})();
