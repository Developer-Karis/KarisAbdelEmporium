// Récupérer les buttons du Carousel
let carouselButtons = document.querySelectorAll("input");
let arrButtons = Array.from(carouselButtons);

let myRowCarousel = document.querySelectorAll("#fashionProducts .carous");
let arrRow = Array.from(myRowCarousel);

arrRow[1].style.display = "none";
arrRow[2].style.display = "none";
arrRow[3].style.display = "none";

let n = true;

let myVar;
let myVar2;
let myVar3;
let myVar4;

function stop() {
    clearTimeout(myVar);
    clearTimeout(myVar2);
    clearTimeout(myVar3);
    clearTimeout(myVar4);
}

window.onload = imgOne();

function imgOne() {
    arrRow[1].style.transition = "1.5s";
    arrRow[1].style.opacity = "0";
    arrRow[2].style.transition = "1.5s";
    arrRow[2].style.opacity = "0";
    arrRow[3].style.transition = "1.5s";
    arrRow[3].style.opacity = "0";
    setTimeout(() => {
        arrRow[1].style.display = "none";
        arrRow[2].style.display = "none";
        arrRow[3].style.display = "none";
        arrRow[0].style.display = "flex";
        arrRow[0].style.transition = "1.5s";
        arrRow[0].style.opacity = "1";
    }, 500);

    if (n == true) {
        myVar = setTimeout(() => {
            carouselButtons[7].removeAttribute("checked");
            carouselButtons[8].setAttribute("checked", '');
            imgTwo();
        }, 5000);
    }
}

function imgTwo() {
    arrRow[0].style.transition = "1.5s";
    arrRow[0].style.opacity = "0";
    arrRow[2].style.transition = "1.5s";
    arrRow[2].style.opacity = "0";
    arrRow[3].style.transition = "1.5s";
    arrRow[3].style.opacity = "0";
    setTimeout(() => {
        arrRow[0].style.display = "none";
        arrRow[2].style.display = "none";
        arrRow[3].style.display = "none";
        arrRow[1].style.display = "flex";
        arrRow[1].style.transition = "1.5s";
        arrRow[1].style.opacity = "1";
    }, 500);

    if (n == true) {
        myVar2 = setTimeout(() => {
            carouselButtons[8].removeAttribute("checked");
            carouselButtons[9].setAttribute("checked", '');
            imgThree();
        }, 5000);
    }
}

function imgThree() {
    arrRow[0].style.transition = "1.5s";
    arrRow[0].style.opacity = "0";
    arrRow[1].style.transition = "1.5s";
    arrRow[1].style.opacity = "0";
    arrRow[3].style.transition = "1.5s";
    arrRow[3].style.opacity = "0";
    setTimeout(() => {
        arrRow[0].style.display = "none";
        arrRow[1].style.display = "none";
        arrRow[3].style.display = "none";
        arrRow[2].style.display = "flex"
        arrRow[2].style.transition = "1.5s";
        arrRow[2].style.opacity = "1";
    }, 500);

    if (n == true) {
        myVar3 = setTimeout(() => {
            carouselButtons[9].removeAttribute("checked");
            carouselButtons[10].setAttribute("checked", '');
            imgFour();
        }, 5000);
    }
}

function imgFour() {
    arrRow[0].style.transition = "1.5s";
    arrRow[0].style.opacity = "0";
    arrRow[1].style.transition = "1.5s";
    arrRow[1].style.opacity = "0";
    arrRow[2].style.transition = "1.5s";
    arrRow[2].style.opacity = "0";
    setTimeout(() => {
        arrRow[0].style.display = "none";
        arrRow[1].style.display = "none";
        arrRow[2].style.display = "none";
        arrRow[3].style.display = "flex";
        arrRow[3].style.transition = "1.5s";
        arrRow[3].style.opacity = "1";
    }, 500);

    if (n == true) {
        myVar4 = setTimeout(() => {
            carouselButtons[10].removeAttribute("checked");
            carouselButtons[7].setAttribute("checked", '');
            imgOne();
        }, 5000);
    }
}

arrButtons[7].addEventListener("click", () => {
    stop();
    n = false;
    imgOne();
})

arrButtons[8].addEventListener("click", () => {
    stop();
    n = false;
    imgTwo();
})

arrButtons[9].addEventListener("click", () => {
    stop();
    n = false;
    imgThree();
})

arrButtons[10].addEventListener("click", () => {
    stop();
    n = false;
    imgFour();
})