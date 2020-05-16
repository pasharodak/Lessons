let checkbox = document.querySelectorAll('input'),
    a = document.querySelector('a'),
    paragraph = document.querySelectorAll('p');
    paragraph.forEach(function(item){
        item.style.display = "none";
    });
    
    checkbox.forEach(function(item,i){
        item.addEventListener('click',function(){
            if(item.checked){
                paragraph[i].style.display = "block";
            }else if(!item.checked){
                paragraph[i].style.display = "none";
            }
           });
    });
   