let input = document.querySelector('input');

function changeColor(){
    let c = 1;
    for (let i = 1;i<= 100; i++){
        if(this.value == i){
            c = 0;
            this.style.backgroundColor = "red";
        }
    }
    if(this.style.backgroundColor == "red" && c == 1){
        this.style.backgroundColor = "green";
    }
}
input.addEventListener('focusout',changeColor);