let target = document.querySelectorAll("#side__nav > li").forEach((n, i, a) => {
    n.addEventListener('click', () => {
        a.forEach(m => m.classList.toggle('activeGroup', m === n));
    });
});

let linkItems = document.querySelectorAll('.sidebar__item'),
    arreyLink = Array.from(linkItems),
    mapLink = arreyLink.map(t => {return t.innerText;}),
    changeIcon = document.querySelector('#icon-arrow'),
    changeBlock = document.querySelector('#changeText'),
    i;
    for(i = 0; i < arreyLink.length; ++i) {
        if(i != 0) {
            function dispBlock(i) {
                arreyLink[i].onclick = function() {
                    changeBlock.style = "display: block;";
                    changeIcon.style = "display: block;";
                };
            }
            dispBlock(i);
        }
    }
    arreyLink[0].addEventListener("click", () => {
        changeBlock.style = "display: none;";
        changeIcon.style = "display: none;";
    });
    arreyLink[1].addEventListener("click", () => {
        changeBlock.innerHTML = mapLink[1];
    });
    arreyLink[2].addEventListener("click", () => {
        changeBlock.innerHTML = mapLink[2];
    });
    arreyLink[3].addEventListener("click", () => {
        changeBlock.innerHTML = mapLink[3];
    });
    arreyLink[4].addEventListener("click", () => {
        changeBlock.innerHTML = mapLink[4];
    });
    arreyLink[5].addEventListener("click", () => {
        changeBlock.innerHTML = mapLink[5];
    });
    arreyLink[6].addEventListener("click", () => {
        changeBlock.innerHTML = mapLink[6];
    });
    arreyLink[7].addEventListener("click", () => {
        changeBlock.innerHTML = mapLink[7];
    });
    arreyLink[8].addEventListener("click", () => {
        changeBlock.innerHTML = mapLink[8];
    });
    