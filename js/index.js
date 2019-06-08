// Your code goes here

// 1st item

const logoAnimate = document.querySelector('.logo-heading')

logoAnimate.addEventListener("mouseover", () => {
    logoAnimate.style.transform = 'rotate(-10deg)'
})

logoAnimate.addEventListener("mouseleave", () => {
    logoAnimate.style.transform = 'rotate(0deg)'
})

// 2nd item

const navMovement = document.querySelector('.main-navigation')

navMovement.addEventListener('scroll', () => {
    navMovement.style.background = "gray"
})


// 3rd item

const copyText = document.querySelector('p')

copyText.addEventListener('copy', () => {
    window.confirm('Text Copied!')
})

// 4th item

const formButtonChanges = document.querySelector('.adventureForm')

formButtonChanges.style.fontSize = "16px"
formButtonChanges.addEventListener('onSelect', () => {
    if(document.querySelector("input[id=no):checked")){
        window.alert("Quit lying!")
    }
})

// 5th Item

const pageLoad = document.querySelector('p')

pageLoad.addEventListener('load', () => {
    pageLoad.addClass('.animateText')
})

// 6th Item

const funSunButton = document.querySelectorAll(".btn")

funSunButton.addEventListener('focus' (event) => {
    funSunButton[0].textContent = "Pick Me!"
})