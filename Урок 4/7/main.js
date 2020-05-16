const elems = document.querySelectorAll('td');
const   p = document.querySelector('p');
const n = document.querySelector('button');

let c = 0;
let arr = [];



elems.forEach(function(item,i){
    item.addEventListener('click', function(){
        item.style.backgroundColor = "red";
        p.innerHTML = c;
        if(arr[i] == undefined){
            arr[i] = 0;
        }
        arr[i] += 1;


        let r = 0;
        arr.forEach(function(elem, i){
            if(elem != undefined ){
                r++;
            }            
        })
        p.innerHTML = r;
    })
})

n.addEventListener('click', function(){
    elems.forEach(function(item){
        item.style.backgroundColor = "white";
    })
    arr = [];
    r = 0;
    c = 0;
    p.innerHTML = 0;
})