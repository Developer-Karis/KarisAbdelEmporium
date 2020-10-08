export let navBar = document.querySelector('nav');
export let head = document.getElementsByTagName('header');
export let stick = navBar.offsetTop;

function fixnav(){
    if(window.scrollY >= stick){
        document.body.style.paddingTop = navBar.offsetHeight + 'px';
        document.body.classList.add('stickyNav');
    } else {
        document.body.style.paddingTop = 0;
        document.body.classList.remove('stickyNav');
    }
}

window.addEventListener('scroll', fixnav);
