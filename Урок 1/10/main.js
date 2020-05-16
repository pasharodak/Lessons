let a = document.querySelector('.num'),
 b = document.querySelector('.out'),
 e = document.querySelectorAll('.in');
a.addEventListener('focusout', function(){
    let date = new Date(),
    nowYear = date.getFullYear();
    let fullYear = nowYear - parseInt(a.value);
    b.innerHTML = fullYear;



});
