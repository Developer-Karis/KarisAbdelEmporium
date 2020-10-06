let myBody = document.querySelector('body')

let modeJour = document.querySelector('.modeblanc')
let modeNuit = document.querySelector('.modesombre')

modeJour.addEventListener('click',()=>{
    myBody.style = 'background-color: white'
})

modeNuit.addEventListener('click',()=>{
    myBody.style = 'background-color: black; color: white'
})