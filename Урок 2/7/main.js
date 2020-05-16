let input = document.querySelector('input'),
    btn = document.querySelector('button');
    lengTh = document.querySelectorAll('input')[1];

    btn.addEventListener('click', function(){
        input.value = "";
        if(lengTh.value == ""){
            lengTh.value = 1;
        }
        for(let i = 0; i<=lengTh.value-1;i++){
            input.value = input.value +  String.fromCharCode(Math.floor(Math.random() * 100)+50);
        }
        
    });