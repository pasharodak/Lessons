let a = document.querySelector('.num'),
 b = document.querySelector('p'),
 e = document.querySelectorAll('.in');
a.addEventListener('focusout', function(){
    
    let c = 0,
    n = a.value.split(" ");
    a.value = '';
    x = n;
    n.forEach(function(elem,i){
       let m = x[i].replace(elem[0], elem[0].toUpperCase());
        a.value = a.value + " " +  m;
        
    });



});
