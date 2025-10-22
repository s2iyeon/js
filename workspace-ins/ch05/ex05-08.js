const list = document.querySelector('ul');
console.log(list.className);
console.log(list.classList);

const btn = document.querySelector('button');
btn.addEventListener('click', function(){
  list.className = list.className + ' pad100';
});

for(let item of list.children){
  item.addEventListener('click', function(){
    
  });
}