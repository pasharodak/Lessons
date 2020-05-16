let input = document.querySelector('input');

input.addEventListener('mouseout', function(){
    let f = setInterval(function(){
        input.value = parseInt(input.value) - 1;
        if(parseInt(input.value) <= 0){
            alert("отсчёт окончен");
            input.value = 0;
            clearInterval(f);
            
        }
        
    },1000);
});