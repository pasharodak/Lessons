let checkbox = document.querySelectorAll('input'),
    a = document.querySelector('a'),
    paragraph = document.querySelector('p');

    a.addEventListener('click', function(){
        event.preventDefault();
        checkbox.forEach(function(item,i){
            if(item.checked == true){
                paragraph.innerHTML = item.value;
            }
        });
    });