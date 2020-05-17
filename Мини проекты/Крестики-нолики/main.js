(function(){
    const cols = document.querySelectorAll('.cols');
    const x = document.querySelector('.x');
    const o = document.querySelector('.o');
    const all = document.querySelector('.all');
    const p = document.querySelector('.win');
    let numbers = 0;
    cols.forEach(function (elem, i) {

        elem.addEventListener("click", function () {
            if (numbers == 0 && elem.innerHTML == "") {
                elem.innerHTML = 0;
                numbers++;
            } else if (numbers != 0 && elem.innerHTML == "") {
                elem.innerHTML = "x";
                numbers--;
            }
            if (cols[0].innerHTML == cols[1].innerHTML && cols[2].innerHTML == cols[1].innerHTML && cols[2].innerHTML != "") {
                winner(elem.innerHTML)
            }else
            if (cols[3].innerHTML == cols[4].innerHTML && cols[5].innerHTML == cols[3].innerHTML && cols[3].innerHTML != "") {
                winner(elem.innerHTML)
            }else
            if (cols[6].innerHTML == cols[7].innerHTML && cols[8].innerHTML == cols[7].innerHTML && cols[7].innerHTML != "") {
                winner(elem.innerHTML)
            }else
            if (cols[0].innerHTML == cols[4].innerHTML && cols[8].innerHTML == cols[4].innerHTML && cols[4].innerHTML != "") {
                winner(elem.innerHTML)
            }else
            if (cols[2].innerHTML == cols[4].innerHTML && cols[6].innerHTML == cols[4].innerHTML && cols[4].innerHTML != "") {
                winner(elem.innerHTML)
            }else
            if (cols[0].innerHTML == cols[3].innerHTML && cols[6].innerHTML == cols[3].innerHTML && cols[3].innerHTML != "") {
                winner(elem.innerHTML)
            }else
            if (cols[1].innerHTML == cols[4].innerHTML && cols[7].innerHTML == cols[4].innerHTML && cols[4].innerHTML != "") {
                winner(elem.innerHTML)
            }else
            if (cols[2].innerHTML == cols[5].innerHTML && cols[8].innerHTML == cols[5].innerHTML && cols[5].innerHTML != "") {
                winner(elem.innerHTML)
            }

            if(cols[0].innerHTML != "" && cols[1].innerHTML != "" && cols[2].innerHTML != "" && cols[3].innerHTML != "" && cols[4].innerHTML != "" && cols[5].innerHTML != "" && cols[6].innerHTML != "" && cols[7].innerHTML != "" && cols[8].innerHTML != ""){
                p.innerHTML = "ничья"
                all.innerHTML = parseInt( all.innerHTML) +1;
            }

        })
    });
    

    function winner(a) {
        p.innerHTML = "Победил: " + a;
        cols.forEach(function(itm,j){
            itm.style.pointerEvents = "none"
        })
        if(a == "x"){
            x.innerHTML = parseInt( x.innerHTML) +1;
        }else if(a == "0"){
            o.innerHTML = parseInt( o.innerHTML) +1;
        }
        all.innerHTML = parseInt( all.innerHTML) +1;
    }
}())
   


  
    const reset = document.querySelector('.reset');
reset.addEventListener('click', function(){
    cols.forEach(function(item,i){
        item.innerHTML = ''
    })
    cols.forEach(function(itm,j){
        itm.style.pointerEvents = "auto"
    })
})


