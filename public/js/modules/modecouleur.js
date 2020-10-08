let myBody = document.querySelector('body')
let myModale = document.querySelectorAll('div')[2]
let myModale2 = document.querySelectorAll('div')[10];


let modeJour = document.querySelector('.modeblanc')
let modeNuit = document.querySelector('.modesombre')

modeJour.addEventListener('click',()=>{
    myBody.style = 'background-color: white'
    myModale.style = 'background-color: white'
    myModale2.style = 'background-color: white'
})

modeNuit.addEventListener('click',()=>{
    myBody.style = 'background-color: black; color: white'
    myModale.style = 'background-color: black; color: white;'
    myModale2.style = 'background-color: black; color: white;'
})