let checkbox = document.querySelector('input'),
    a = document.querySelector('a');

    
   a.addEventListener('click', function(){
       event.preventDefault();
       if(checkbox.checked == true){
           checkbox.checked = false;
       }else{
        checkbox.checked = true;
       }
 
   });