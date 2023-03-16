let callPopUp = document.querySelector('.btn__item');
callPopUp.addEventListener('click', () => {
    let winPop = document.querySelector('.popup__container'),
        closeBtn1 = document.querySelector('.close__btn'),
        closeBtn2 = document.querySelector('#close__btn');
    winPop.classList.toggle('open');
    if(winPop.classList.contains('open')) {
        winPop.style = "opacity: 1;";
    } else {
        winPop.style = "opacity: 0;";
    }
    closeBtn1.addEventListener("click", () => {
        if(winPop.classList.contains('open')) {
            winPop.classList.remove('open');
            winPop.style = "opacity: 0;";
        }
    });
    closeBtn2.addEventListener("click", () => {
        if(winPop.classList.contains('open')) {
            winPop.classList.remove('open');
            winPop.style = "opacity: 0;";
        }
    });
});