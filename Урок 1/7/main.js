let a = document.querySelector('.num'),
 b = document.querySelector('.out'),
 e = document.querySelectorAll('.in');
a.addEventListener('focusout', function(){
    
    let c = 0,
    n = a.value.split(" ");
   
    b.innerHTML = n.length;



});
