const numb = document.querySelectorAll('.numb');
const operator = document.querySelectorAll('.oper');
const equally =document.querySelector('.equally');
const input = document.querySelector('input');
const btn = document.querySelectorAll('button');
const C = document.querySelector('.C');

C.addEventListener('click',function(){
    input.value = input.value.substr(0,input.value.length - 1);
})

btn.forEach(function(bg){
    bg.addEventListener('mousemove', function(){
        bg.style.backgroundColor = "#f0f0f0"
    })
    bg.addEventListener('mouseout', function(){
        bg.style.backgroundColor = "chocolate"
    })
})


numb.forEach(function(e,i){
    e.addEventListener('click', function(){
        input.value = input.value + e.innerHTML
    })
})


operator.forEach(function(elem,i){
    elem.addEventListener('click',function(){
        let count = 0;
        for(let c = 0; c< operator.length -1;c++){
            let inVal = input.value;
            let str = inVal.substr(inVal.length - 1 ,1);
            if(str == operator[c].innerHTML){
                count=+1;
            }
        }
        if(count == 0 ){
            input.value = input.value + elem.innerHTML;
        }
    })
})

equally.addEventListener('click', function(){
    input.value = eval(input.value);
})