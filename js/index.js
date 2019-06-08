// Your code goes here

// 1st item

const logoAnimate = document.querySelector('.logo-heading')

logoAnimate.addEventListener("mouseover", () => {
    logoAnimate.style.transform = 'rotate(-10deg)'
})

logoAnimate.addEventListener("mouseleave", () => {
    logoAnimate.style.transform = 'rotate(0deg)'
})

console.log(logoAnimate)