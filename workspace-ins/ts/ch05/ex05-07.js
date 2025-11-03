const smile = document.querySelector('span');
console.log(smile.style);
console.log(smile.style.left, smile.style.top);

setTimeout(() => {
  smile.style.left = '166px';
  smile.style.top = '33px';
  smile.style.fontSize = '20px';
}, 1000);

document.addEventListener('mousemove', function(event){
  const x = event.clientX - smile.clientWidth;
  const y = event.clientY - smile.clientHeight;

  smile.style.left = x + 'px';
  smile.style.top = y + 'px';
  smile.style.fontSize = x / 5 + 'px';

});