let paragraph = document.getElementsByTagName('p')[0];
    paragraph.addEventListener('click', function(){
        setInterval(function(){
            paragraph.classList.toggle("red");
        },1000);
    });