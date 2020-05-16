let paragraph = document.querySelector('p'),
 arr = ['Один', 'Два', 'Три', 'Четыре'],
 link = document.querySelector('#link');


 window.onload = function(){
    paragraph.innerHTML = arr[0];
    let c = 0;
    link.addEventListener('click', function(){
        event.preventDefault();
       
        c++;
        if(arr[c] != undefined){
            paragraph.innerHTML = paragraph.innerHTML + "<br>" + arr[c];
        }
       
     });
    
 };
 
