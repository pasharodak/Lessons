let elems = document.querySelectorAll('td'),
    c = 0;

    elems.forEach(function(elem,i){
        if(parseInt(elem.innerHTML) > c){
            c = parseInt(elem.innerHTML) ;
        }
    })
    elems.forEach(function(elem,i){
        if(parseInt(elem.innerHTML) == c){
            elem.style.backgroundColor = "red";
        }
    })