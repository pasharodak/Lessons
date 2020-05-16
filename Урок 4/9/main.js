const ul = document.querySelectorAll('ul');


for(let i = 0;i <= ul.length-1;i++){
    for(let j = 0; j < ul[i].children.length;j++){
        ul[i].children[j].style.display = "none"
    }
}

ul.forEach(function(e,i){
    e.addEventListener('click', function(){
        for(let j = 0; j < ul[i].children.length;j++){
            ul[i].children[j].style.display = "list-item"
        }
    })

})