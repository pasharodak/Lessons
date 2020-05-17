const select = document.querySelectorAll('select');
const input = document.querySelector('input');
const p = document.querySelector('p');

let arrCity = {
    "Belarus":['Brest', 'Grodno', 'Minsk'],
    "Rassia":['Omsk', "Moskov", "EKB"],
    "Polsha":["Varshava", "Varshava"]
}
let outsel = document.querySelectorAll('select')[1];
function removeOption(e){
    for(let i = 0;i< e.children.length;i++){
        e.children[i].remove();
        console.log('ok')
    }
}

select[0].addEventListener('change' , function(){
    outsel = document.querySelectorAll('select')[1];
    removeOption(outsel);
  
    let changeSelect = select[0].value;
    for(let i = 0;i < arrCity[changeSelect].length;i++){
        let el = document.createElement('option');
        el.innerHTML = arrCity[changeSelect][i];
        outsel.appendChild(el);
        
    }
    
})
