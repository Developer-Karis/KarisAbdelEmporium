export let myBody = document.querySelector('body')
let myModale = document.querySelectorAll('div')[2]
let myModale2 = document.querySelectorAll('div')[10];

let modeJour = document.querySelector('.modeblanc')
let modeNuit = document.querySelector('.modesombre')

let myNavRow = document.querySelectorAll(".souligner");
export let arrNavLi = Array.from(myNavRow);

let myInfoCust = document.getElementsByClassName("infoCust");
let arrInfoCust = Array.from(myInfoCust);

export let verifColor = true;

modeJour.addEventListener('click', () => {
    verifColor = true;
    myBody.style = 'background-color: white'
    myModale.style = 'background-color: white'
    myModale2.style = 'background-color: white'
    arrNavLi.forEach(element => {
        element.style.color = "black";
    });
})

modeNuit.addEventListener('click', () => {
    verifColor = false;
    myBody.style = 'background-color: black; color: white'
    myModale.style = 'background-color: black; color: white;'
    myModale2.style = 'background-color: black; color: white;'
    arrNavLi.forEach(element => {
        element.style.color = "white";
    });
    arrInfoCust.forEach(element => {
        element.style.color = "black";
    });
})