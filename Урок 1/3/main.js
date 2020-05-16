let a = document.querySelector('input'),
 b = document.querySelector('p');
a.addEventListener('focusout', function(){
    let c = 0;
for(let i = 0; i<= a.value.length-1;i++){
    c +=  parseInt(a.value[i]);
}
b.innerHTML = c;
});
