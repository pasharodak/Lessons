let input = document.querySelector('input');

    setInterval(function(){
        input.value = parseInt(input.value) ** 2;
    },1000);