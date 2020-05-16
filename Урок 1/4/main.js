let a = document.querySelector('input'),
 b = document.querySelector('p');
a.addEventListener('focusout', function(){
    
    let c = 0,
    n = a.value.split(",");
for(let i = 0; i<= n.length-1;i++){
    c +=  parseInt(n[i]);
}

b.innerHTML = c;
});
