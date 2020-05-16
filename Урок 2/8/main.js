let input = document.querySelector('input'),
    btn = document.querySelector('button');
    lengTh = document.querySelectorAll('input')[1],
    symbols = document.querySelectorAll('input')[2];

    btn.addEventListener('click', function(){
        input.value = "";
        let arr = symbols.value.split("");
        if(lengTh.value == ""){
            lengTh.value = 1;
        }
      
            
        
        for(let i = 0; i<=lengTh.value-1;i++){
            let rand = Math.floor(Math.random() * 100);
            while(rand > symbols.value.length-1){
                    rand = Math.floor(Math.random() * 100);
            }
            input.value = input.value +  arr[rand];
        }
        
    });