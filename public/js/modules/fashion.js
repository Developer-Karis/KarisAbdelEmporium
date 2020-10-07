// Récupérer les buttons du Carousel
let carouselButtons = document.querySelectorAll("input");
let arrButtons = Array.from(carouselButtons);

let myRowCarousel = document.querySelectorAll("#fashionProducts .carous");
let arrRow = Array.from(myRowCarousel);

arrRow[1].style.display = "none";
arrRow[2].style.display = "none";
arrRow[3].style.display = "none";

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

    setTimeout(() => {
        carouselButtons[0].removeAttribute("checked");
        carouselButtons[1].setAttribute("checked", '');
        imgTwo();
    }, 5000);
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

    setTimeout(() => {
        carouselButtons[1].removeAttribute("checked");
        carouselButtons[2].setAttribute("checked", '');
        imgThree();
    }, 5000);
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

    setTimeout(() => {
        carouselButtons[2].removeAttribute("checked");
        carouselButtons[3].setAttribute("checked", '');
        imgFour();
    }, 5000);
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

    setTimeout(() => {
        carouselButtons[3].removeAttribute("checked");
        carouselButtons[0].setAttribute("checked", '');
        imgOne();
    }, 5000);
}

arrButtons[0].addEventListener("click", () => {
    imgOne();
})

arrButtons[1].addEventListener("click", () => {
    imgTwo();
})

arrButtons[2].addEventListener("click", () => {
    imgThree();
})

arrButtons[3].addEventListener("click", () => {
    imgFour();
})