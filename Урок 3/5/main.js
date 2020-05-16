let checkbox = document.querySelectorAll('input'),
    a = document.querySelector('a'),
    paragraph = document.querySelector('p');

    a.addEventListener('click', function(){
        event.preventDefault();
        paragraph.innerHTML = "";
        checkbox.forEach(function(item,i){
            if(item.checked == true){
                if(paragraph.innerHTML == ""){
                    paragraph.innerHTML = item.value; 
                }else{
                    paragraph.innerHTML =  paragraph.innerHTML + ", " +  item.value;
                }
                
            }
        });
    });