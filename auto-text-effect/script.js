const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')

const text = 'We Love Programming'
let idx = 1
let speed = 300 / speedEl.value

displayText()

speedEl.addEventListener('input', (e) => {

    if (e.target.value > 10) {
        e.target.value = 10
    }

    if (!e.target.value) {
        e.target.value = 1
    }

    speed = 300 / e.target.value
})



function displayText() {
    textEl.innerText = text.slice(0, idx)
    idx++

    if (idx > text.length) {
        idx = 0
    }

    setTimeout(displayText, speed)
}

