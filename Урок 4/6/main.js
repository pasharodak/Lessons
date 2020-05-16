setTimeout(function(){

    let col1 = document.querySelectorAll('.col1 > td'),       
    col2 = document.querySelectorAll('.col2 > td'),
    col3 = document.querySelectorAll('.col3 > td'),
    col4 = document.querySelectorAll('.col4 > td'),
    tr = document.querySelectorAll('tr'),
    sum = [0,0,0,0,0];

    let table = [col1, col2, col3, col4];


    table.forEach(function(item,i){
        item.forEach(function(elem, j){
            sum[j] = sum[j] + parseInt(elem.innerHTML)
        })
    })

    sum.forEach(function(elem,i){
        col4[i].innerHTML = sum[i];
    })
},2000)