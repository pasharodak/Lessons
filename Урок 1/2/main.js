let a = document.querySelectorAll('.num');
let btn = document.querySelector('.btn'),
 p = document.querySelector('#result');

btn.addEventListener('click', function(){
    c = 0;
    a.forEach(function(item, i){
        c +=  parseInt(item.value);
    });
    p.innerHTML = c;
});