let input = document.querySelector('input'),
    p = document.querySelector('p');

    input.addEventListener('keydown', function(event){
        if (event.code == "Enter"){
            if(p.innerHTML == ""){
                p.innerHTML = p.innerHTML + input.value;
            }else if(p.innerHTML != ""){
                p.innerHTML = p.innerHTML + ", " + input.value;
            };
        }

        
    });