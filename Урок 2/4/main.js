let input = document.querySelector('input'),
    paragraph = document.querySelectorAll('p');
    if (input.value == ""){
        input.value = 0;
    }
paragraph.forEach(function(item,i){
    item.addEventListener('click', function(){
        input.value = parseInt(input.value) + 1;
    });
});