let input = document.querySelector('input');

function getSelected(){
    let sel = window.getSelection().toString();
    if(sel != ""){
        input.value = "Ну не копиру по братски";
    }else{
        input.value = "";
    }
    

}
document.documentElement.addEventListener('mouseup',getSelected);
