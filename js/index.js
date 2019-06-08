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
    navMovement.style.backgroundColor = "gray"
})


// 3rd item

const copyText = document.querySelector('p')

copyText.addEventListener('copy', () => {
    window.confirm('Text Copied!')
})

// 4th item

const formStyling = document.querySelector('.adventureForm')
formStyling.style.fontSize = "16px"


const formButtonChanges = document.getElementById("noRadio")

formButtonChanges.addEventListener('onSelect', () => {
    if(formButtonChanges.checked === true){
        window.alert("Quit lying!")
    }
})

// 5th Item

const pageLoad = document.querySelectorAll('p')

pageLoad.forEach(item => {
    item.classList.add('animateText')
})

pageLoad.forEach(item => {
    item.addEventListener('load', () => {
        item.classList.toggle("animateText")
    })
})

// 6th Item

// const funSunButton = document.querySelectorAll(".btn")

// funSunButton.addEventListener('focus' () => {
//     funSunButton[0].textContent = "Pick Me!"
// })


// 7th item

const doubleClicks = document.querySelectorAll("img")

doubleClicks.forEach(item => {
    item.addEventListener('dblclick', () => {
        window.alert("this is an image")
    })
})

// 8th item

const resizeDoc = document.querySelector('.container')

resizeDoc.addEventListener("resize", () => {
    if(resizeDoc.includes("max-width")){
        copyText.style.fontSize = "18px"
    }
})