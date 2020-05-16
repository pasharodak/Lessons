let btn = document.querySelector('button'),
    input = document.querySelector('input'),
    ul = document.querySelector('ul');

    btn.addEventListener('click', function(){
        let sity = input.value.split(',');
            sity.forEach(function(item,i){
                li = document.createElement('li');
                li.innerHTML = item;
                ul.appendChild(li);
            })
            

    })