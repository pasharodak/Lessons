let checkbox = document.querySelectorAll('input'),
    a = document.querySelector('a');

    a.addEventListener('click', function(){
        event.preventDefault();
        checkbox.forEach(function(elem, i){
            if(elem.checked == true){
                elem.checked = false;
            }else{
                elem.checked = true;
            }
            
        });
    });