let modal = document.getElementById('myModal');
let modal2 = document.getElementById('myModal2');

let btn = document.getElementById("myBtn");

let myConnexion = document.querySelectorAll("button")[3]
let myInscr = document.querySelectorAll('p')[0]

let span = document.getElementsByClassName("close")[0];
let span1 = document.querySelectorAll("span")[1];

let connModal = document.querySelectorAll('p')[1]


// avec le btn connexion de la nav

btn.addEventListener('click', () => {

    modal.style.display = "block";

})


span.onclick = function () {

    modal.style.display = "none";

}


// avec le btn inscription


myInscr.addEventListener('click', () => {

    modal.style.display = "none"
    modal2.style.display = "block";

})

span1.onclick = function () {
    modal2.style.display = "none";
    modal.style.display = "none";
}

// avec le btn connexion


connModal.addEventListener('click', () => {

    modal.style.display = "block"
    modal2.style.display = "none";

})

span1.onclick = function () {
    modal2.style.display = "none";
    modal.style.display = "none";
}
