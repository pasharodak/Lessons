const a = document.querySelectorAll('a');
const p = document.querySelector('p');

a.forEach(function(e,i){
    e.addEventListener('click', function(){
        event.preventDefault();
        a.forEach(function(item, j){
            item.style.color = "black";
        })
        e.style.color = "red";
        p.innerHTML = e.innerHTML;

    })
})