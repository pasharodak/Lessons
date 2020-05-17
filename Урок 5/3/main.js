const ul = document.querySelector('ul');
const li = document.querySelectorAll('li');
const btn = document.querySelector('button');


function namberSort(a,b){
    return a-b;
}
btn.addEventListener('click', function(){
    let arr = [];
    li.forEach(function(e,i){
        arr[i] = parseInt(e.innerHTML);
    })
    arr.sort(namberSort);

    arr.forEach(function(el,j){
        li[j].innerHTML = arr[j]; 
    })
})