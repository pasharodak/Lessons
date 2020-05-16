let a = document.querySelector('.num'),
 b = document.querySelector('p'),
 e = document.querySelectorAll('.in');
a.addEventListener('focusout', function(){
    
    let c = 0,
    n = a.value.split(" ");
    n.forEach(function(elem,i){
        e[i].value = elem;
    });



});
