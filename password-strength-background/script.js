const password = document.getElementById('password')
const background = document.getElementById('background')

password.addEventListener('input', (e)=> {
    console.log(e.target.value)
    const input = e.target.value
    const length = input.length 
    const blurValue = 20 - length * 2 
    background.style.filter = `blur(${blurValue}px)`
})