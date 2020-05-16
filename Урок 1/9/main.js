let a = document.querySelector('.num'),
 b = document.querySelector('.out'),
 e = document.querySelectorAll('.in');
a.addEventListener('focusout', function(){
    
    let c = [],
    n = a.value.split(".");
   for(let i = n.length-1, j = 0; i>= 0, j<= n.length-1;j++, i--){
       c[j] = n[i];
   }
   let v = '-';
   c.join(v);
    b.innerHTML = c;



});
