let div = document.querySelectorAll('div'),
    btn = document.querySelectorAll('button');

    btn.forEach(function(item,i){
        item.addEventListener('click', function(){
            div[i].style.display = "none"
        })
    })
 
    