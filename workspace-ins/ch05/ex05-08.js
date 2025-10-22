const list = document.querySelector('ul');
console.log(list.className);
console.log(list.classList);

const btn = document.querySelector('button');
btn.addEventListener('click', function(){
  list.className = 'size30 pad100';
});

for(let item of list.children){
  item.addEventListener('click', function(){
    // if(item.classList.contains('line-through')){
    //   item.classList.remove('line-through');
    // }else{
    //   item.classList.add('line-through');
    // }
    item.classList.toggle('line-through');
  });
}