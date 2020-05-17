const cols = document.querySelector('.cols');
const rows = document.querySelector('.rows');
let btn = document.querySelector('button');
let reset = document.querySelectorAll('button')[1];


reset.addEventListener('click',function(){
    document.querySelectorAll('tr').forEach(function(e,i){
        e.remove();
    })
})


btn.addEventListener('click', function(){
    for(let i = 0;i < parseInt(rows.value);i++){
        let row = document.createElement('tr');
        document.querySelector('table').appendChild(row);
        for(let j = 0; j < parseInt(cols.value);j++){
            let col = document.createElement('td');
            col.innerHTML = 12;
            row = document.querySelectorAll('tr')[i];
            row.appendChild(col);
        }
    }
})