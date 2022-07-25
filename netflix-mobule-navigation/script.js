const open_btn = document.querySelector('.open-btn')
const close_btn = document.querySelector('.close-btn')
const  nav = document.querySelectorAll('.nav')

console.log("open_btn", open_btn)
console.log("close_btn", close_btn)
console.log('nav', nav)
open_btn.addEventListener('click', () => {
    nav.forEach(element => {
        element.classList.add('visible')
    });
})


close_btn.addEventListener('click', () => {
    nav.forEach(element => {
        element.classList.remove('visible')
    })
})