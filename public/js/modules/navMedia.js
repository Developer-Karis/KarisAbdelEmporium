export let navBar = document.querySelector('nav');
export let head = document.getElementsByTagName('header');
export let stick = navBar.offsetTop;
import { arrNavLi } from "./modecouleur.js";
import { verifColor } from "./modecouleur.js";

function fixnav() {
    if (window.scrollY >= stick) {
        document.body.style.paddingTop = navBar.offsetHeight + 'px';
        document.body.classList.add('stickyNav');
        arrNavLi.forEach(element => {
            element.style.color = "black";
        });
    } else {
        document.body.style.paddingTop = 0;
        document.body.classList.remove('stickyNav');
    }
}

function fixnav2() {
    if (window.scrollY >= stick) {
        document.body.style.paddingTop = navBar.offsetHeight + 'px';
        document.body.classList.add('stickyNav');
        arrNavLi.forEach(element => {
            element.style.color = "white";
        });
    } else {
        document.body.style.paddingTop = 0;
        document.body.classList.remove('stickyNav');
    }
}

if (verifColor == true) {
    window.addEventListener('scroll', fixnav);
} else if (verifColor === false) {
    window.addEventListener('scroll', fixnav2);
}
