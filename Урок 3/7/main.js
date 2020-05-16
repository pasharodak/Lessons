let input = document.querySelector('input'),
    li = document.querySelectorAll('li');
   
    input.addEventListener('change', function(){
        let c = parseInt(input.value)-1;
        li[c].style.backgroundColor = "red";
    });
   