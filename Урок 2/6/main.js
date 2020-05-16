let input = document.querySelector('input'),
    btn = document.querySelector('button');

    btn.addEventListener('click', function(){
        input.value = "";
        for(let i = 0; i<=7;i++){
            input.value = input.value +  String.fromCharCode(Math.floor(Math.random() * 100)+50);
        }
        
    });