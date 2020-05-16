let a = document.querySelector('.num'),
 b = document.querySelector('.out'),
 e = document.querySelectorAll('.in');
a.addEventListener('focusout', function(){
    let c = [],
    n = a.value.split(".");
   
    n.reverse();
    n.join();
    let   nowYear = new Date(n),
    p = nowYear.getDay();
    dayArr = ["вс","пн","вт","ср","чт","пт","сб"]
    b.innerHTML = dayArr[p];



});
