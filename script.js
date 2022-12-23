let expand = true;
document.querySelector(`#products`).addEventListener(`click`, e =>{
    if(expand){
        document.querySelector(`.navDropProducts`).classList.add(`flex`);
        expand = false;
    }
    else{
        document.querySelector(`.navDropProducts`).classList.remove(`flex`);
        expand = true;
    }
})