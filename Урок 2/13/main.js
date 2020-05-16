let paragraph = document.querySelectorAll('p');


 window.onload = function(){
     let c = -1, p = -1;
    setInterval(function(){
        c++;
        p++;
        if(p <= paragraph.length -1){
             paragraph[p].innerHTML = c;
        }else if(p >= paragraph.length -1){
            p = 0;
            paragraph[p].innerHTML = c;
        }
       

    },1000);
    
 };
 
