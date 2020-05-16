let div = document.querySelectorAll('div');

    setTimeout(function(){
        div.forEach(function(elem,i){
            let str = elem.innerHTML.slice(0,10) + "...";
            elem.innerHTML = str;
        })
    },2000)