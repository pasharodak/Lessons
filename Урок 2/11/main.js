let paragraph = document.querySelector('p'),
 arr = ['red', 'blue', 'black', 'yellow'];

 paragraph.addEventListener('click', function(){
    let bg = arr[0];
    setInterval(function(){
        
        for(let i = 0; i<= arr.length-1;i++){
            if(bg == arr[i] && i != arr.length-1){
                paragraph.style.backgroundColor = bg;
                bg = arr[i+1];
                break;
            }else if(i == arr.length-1){
                paragraph.style.backgroundColor = bg;
                bg = arr[0];
                break;
            }
        }
    },1000);
 });

