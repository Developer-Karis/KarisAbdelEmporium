// Récupérer les buttons du Carousel
let carouselButtons = document.querySelectorAll("input");
let arrButtons = Array.from(carouselButtons);

// Récupérer les images du Carousel
let imgAll = document.querySelectorAll("img");
let arrImg = Array.from(imgAll);

arrImg.forEach(element => {
    element.addEventListener("mouseover", (e) => {
        e.target.style.transition = "transform 1s";
        e.target.style.transform = "scale(0.8)";
    })
});

let titleAll = document.querySelectorAll("h5");
console.log(titleAll);

let priceAll = document.querySelectorAll("span");
console.log(priceAll);

for (let i = 0; i < arrButtons.length; i++) {
    arrButtons[0].addEventListener("click", () => {
        arrButtons[i].style.transition = "transform 1s";
        for (let i = 0; i < arrImg.length; i++) {
            arrImg[i].style.transition = "transform 1s";
            arrImg[0].src = "./public/img/products_mini/product-luxry-sofa.jpg";
            arrImg[1].src = "./public/img/products_mini/product-gloves.jpg";
            arrImg[3].src = "./public/img/products_mini/product-bag.jpg";
            arrImg[2].src = "./public/img/products_mini/product-cups.jpg";
        }
    })

    arrButtons[1].addEventListener("click", () => {
        for (let i = 0; i < arrImg.length; i++) {
            arrImg[0].src = "./public/img/products_mini/product-bed.jpg";
            arrImg[1].src = "./public/img/products_mini/product-modern-sofa.jpg";
            arrImg[2].src = "./public/img/products_mini/product-plates.jpg";
            arrImg[3].src = "./public/img/products_mini/product-tshitr.jpg";
        }
    })
}