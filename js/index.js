// Your code goes here

// 1st item - Complete - mouseover mouseleave

const logoAnimate = document.querySelector('.logo-heading')

logoAnimate.addEventListener("mouseover", () => {
    logoAnimate.style.transform = 'rotate(-10deg)'
})

logoAnimate.addEventListener("mouseleave", () => {
    logoAnimate.style.transform = 'rotate(0deg)'
})

// 2nd item - Complete - scroll

const navMovement = document.querySelector('.main-navigation')

window.addEventListener('scroll', () => {
    navMovement.style.backgroundColor = "rgba(255,255,255,0.5)"
})


// 3rd item - Complete - copy

const copyText = document.querySelector('p')

copyText.addEventListener('copy', () => {
    text = window.getSelection().toString()
    window.alert("YOU COPIED: " + text)
})

// 4th item - Complete - change

const formStyling = document.querySelector('.adventureForm')
formStyling.style.fontSize = "16px"


const formButtonChanges = document.getElementById("noRadio")

formButtonChanges.addEventListener('change', () => {
    if(formButtonChanges.checked === true){
        window.alert("Quit lying!")
    }
})

// 5th Item - Complete - load

const pageLoad = document.querySelectorAll('p')

pageLoad.forEach(item => {
    item.classList.add('animateText')
    item.addEventListener('load', () => {
        item.classList.toggle("animateText")
    })
})



// 6th Item - Complete - mousedown

const funSunButton = document.querySelectorAll(".btn")

funSunButton.forEach(item => {
    item.addEventListener('mousedown', () => {
        item.textContent = `Good Choice!`
    })
})


// 7th Item - Complete - dblclick

const doubleClicks = document.querySelectorAll("img")

doubleClicks.forEach(item => {
    item.addEventListener('dblclick', () => {
        window.alert("this is an image")
    })
})

// 8th item - Complete - Resize

const noImg = document.querySelector('img')

window.addEventListener("resize", () => {
    if(window.innerWidth <= 450){
       noImg.style.display = "none"
    } else if(window.innerWidth > 450)
        {
        noImg.style.display = "visible"
        }
})

// 9th Item - Complete - submit

const dreamForm = document.querySelector('.dreamVacay')

dreamForm.style.padding = "10px 10px 10px 10px"
dreamForm.style.fontSize = "20px"
dreamForm.style.margin = "auto"
dreamForm.addEventListener('submit', (event) => {
    event.preventDefault()
})

dreamForm.addEventListener('submit', () => {
    newSearch = document.getElementById('locationSubmission').value
        window.confirm(`Did you mean to search for ${newSearch}?`)
})


// 10th Item - Complete - drag dragend

const navDrag = document.querySelectorAll(".nav-link")
const bodyWhite = document.querySelector("body")


navDrag.forEach(item => {
    bodyWhite.addEventListener('drag', () => {
        bodyWhite.classList.add('draggingLinks')
    })
})
navDrag.forEach(item => {
    bodyWhite.addEventListener('dragend', () => {
        bodyWhite.classList.remove('draggingLinks')
    })
})

// Prevent Default Request

let navDefaultStop = document.querySelectorAll('.nav-link')

navDefaultStop.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault()
    })
})

// Stop Prop Series

const backgroundNav = document.querySelector('.main-navigation')
const linkColor = document.querySelector('.nav-link')

backgroundNav.addEventListener('click', () => {
    backgroundNav.style.backgroundColor = "gray"
})

linkColor.addEventListener('click', (event) => {
    event.stopPropagation()
    linkColor.style.color = "red"
})