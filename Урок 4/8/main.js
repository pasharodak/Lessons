const elems = document.querySelectorAll('td');

function closeElems(){
    for(let i = 0;i<= elems.length - 1; i++){
        for(let j = 0; j<= elems[i].children.length - 1;j++){
            elems[i].children[j].style.display = "none"
        }
    }
} 
closeElems();

elems.forEach(function(e,i){
    e.addEventListener('click',function(){
            for(let j = 0; j<= elems[i].children.length - 1;j++){
                elems[i].children[j].style.display = "block"
            }
    })
})


for(let i = 0;i<= elems.length - 1; i++){
        elems[i].children[3].addEventListener('click',function(){
            elems[i].innerHTML = elems[i].children[1].value;
            elems[i].children[3].style.display = "none";
            elems[i].children[0].style.display = "none";
            elems[i].children[1].style.display = "none";
            elems[i].children[2].style.display = "none";
        })
    
}