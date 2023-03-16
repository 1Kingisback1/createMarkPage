let dropDownMenu = document.querySelector('.dropdown__btnSb').addEventListener('click', () => {
    let dropList = document.querySelector('.dropdown__list'),
        arrow = document.querySelector('.arrow');
    dropList.classList.toggle('show');
    if(dropList.classList.contains('show') === true) {
        dropList.style = "display: block; animation: dropdownAnim .8s linear;";
        arrow.style = "transform: rotate(-180deg);";
    } else {
        dropList.style = "display: none;";
        arrow.style = "transform: rotate(0deg);";
    }
    let elements = document.querySelectorAll('#el'),
        arrayEl = Array.from(elements),
        mapEl = arrayEl.map(t => {return t.innerText;});
        arrayEl[0].addEventListener('click', (ev) => {
            let changerText = document.querySelector('.textDropdown'),
            thisEl = mapEl[0];
            changerText.innerHTML = thisEl;
            changerText.style = "color: #000";
            dropList.style = "opacity: 0";
            dropList.classList.remove('show');
        });
        arrayEl[1].addEventListener('click', (ev) => {
            let changerText = document.querySelector('.textDropdown'),
            thisEl = mapEl[1];
            changerText.innerHTML = thisEl;
            changerText.style = "color: #000";
            dropList.style = "opacity: 0";
            dropList.classList.remove('show');
        });
        arrayEl[2].addEventListener('click', (ev) => {
            let changerText = document.querySelector('.textDropdown'),
            thisEl = mapEl[2];
            changerText.innerHTML = thisEl;
            changerText.style = "color: #000";
            dropList.style = "opacity: 0";
            dropList.classList.remove('show');
        });
        arrayEl[3].addEventListener('click', (ev) => {
            let changerText = document.querySelector('.textDropdown'),
            thisEl = mapEl[3];
            changerText.innerHTML = thisEl;
            changerText.style = "color: #000";
            dropList.style = "opacity: 0";
            dropList.classList.remove('show');
        });
        // console.log(arrayEl[1]);
        // console.log(mapEl[0]);
});

let dropDownMenuColor = document.querySelector('.dropdown__btnCol').addEventListener('click', () => {
    let dropList = document.querySelector('.dropdown__list-color'),
        arrow = document.querySelector('.arrowColor');
    dropList.classList.toggle('show');
    if(dropList.classList.contains('show') === true) {
        dropList.style = "display: block; animation: dropdownAnim .8s linear;";
        arrow.style = "transform: rotate(-180deg);";
    } else {
        dropList.style = "display: none;";
        arrow.style = "transform: rotate(0deg);";
    }
    let elements = document.querySelectorAll('#elColor'),
        arrayEl = Array.from(elements),
        mapEl = arrayEl.map(t => {return t.innerText;});
        arrayEl[0].addEventListener('click', (ev) => {
            let changerText = document.querySelector('.textDropdownColor'),
            thisEl = mapEl[0];
            changerText.innerHTML = thisEl;
            changerText.style = "color: #000";
            dropList.style = "opacity: 0";
            dropList.classList.remove('show');
        });
        arrayEl[1].addEventListener('click', (ev) => {
            let changerText = document.querySelector('.textDropdownColor'),
            thisEl = mapEl[1];
            changerText.innerHTML = thisEl;
            changerText.style = "color: #000";
            dropList.style = "opacity: 0";
            dropList.classList.remove('show');
        });
        arrayEl[2].addEventListener('click', (ev) => {
            let changerText = document.querySelector('.textDropdownColor'),
            thisEl = mapEl[2];
            changerText.innerHTML = thisEl;
            changerText.style = "color: #000";
            dropList.style = "opacity: 0";
            dropList.classList.remove('show');
        });
        arrayEl[3].addEventListener('click', (ev) => {
            let changerText = document.querySelector('.textDropdownColor'),
            thisEl = mapEl[3];
            changerText.innerHTML = thisEl;
            changerText.style = "color: #000";
            dropList.style = "opacity: 0";
            dropList.classList.remove('show');
        });
        // console.log(arrayEl[1]);
        // console.log(mapEl[0]);
});