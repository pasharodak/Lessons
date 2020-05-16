let btn = document.querySelector('button'),
    paragraph = document.querySelectorAll('p');

    btn.addEventListener('click', function(){
        let c = 0,n = 0;
        paragraph.forEach(function(item,i){
            if(parseInt(item.innerHTML) > c){
                c = parseInt(item.innerHTML);
                n = i;
            }
        });

        paragraph[n].style.backgroundColor = "red";
    });