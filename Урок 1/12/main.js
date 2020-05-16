let input = document.querySelector('.num'),
    btn = document.querySelector('button'),
    out = document.querySelector('.out');

function reverseStr(str){
    let newStr = str;
    for(let i= 0, j = str.length; i<= str.length-1,j>=0;j--,i++){
        newStr[i] = str[j].replase(str[i],str[j]);
    }
    return newStr;
};
btn.addEventListener('click', function(){
    out.innerHTML = reverseStr(input.value);
});
