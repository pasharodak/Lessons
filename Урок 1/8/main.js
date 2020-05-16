let a = document.querySelector('.num'),
 b = document.querySelector('.out'),
 e = document.querySelectorAll('.in');
a.addEventListener('focusout', function(){
    
    let c = 0,
    n = a.value.split(" ");
   n.forEach(function(item,i){
       if(c< item.length){
        c = item.length;
       }
   });
    b.innerHTML = c;



});
