let a = document.querySelectorAll('.input-block');
let btn = document.querySelector('.btn');

btn.addEventListener('click', function(){
    c = 0;
    a.forEach(function(item, i){
        if(i != 3){
            c +=  parseInt(item.value);
        }
    });
    a[3].value = c;
});