let checkbox = document.querySelectorAll('input'),
    kursiv = document.querySelector('#kursiv'),
    bold = document.querySelector('#bold'),
    red = document.querySelector('#red'),
    paragraph = document.querySelector('p');


    kursiv.addEventListener('click',function(){
        if(kursiv.checked){
            paragraph.style.fontStyle = "italic"
        }else if(!kursiv.checked){
            paragraph.style.fontStyle = "normal"
        }
    })


    bold.addEventListener('click',function(){
        if(bold.checked){
            paragraph.style.fontWeight = "bold"
        }else if(!bold.checked){
            paragraph.style.fontWeight = "normal"
        }
    })

    red.addEventListener('click',function(){
        if(red.checked){
            paragraph.style.color = "red"
        }else if(!red.checked){
            paragraph.style.color = "black"
        }
    })
   
    