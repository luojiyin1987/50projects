const codes = document.querySelectorAll('.code')

codes[0].focus()
const length = codes.length

codes.forEach((code, idx) => {
    code.addEventListener('keydown', (e) => {
        if (e.key >= 0 && e.key <= 9 ) {
            codes[idx].value = ''
           
            setTimeout(() => { codes[idx + 1===length?idx:idx+1].focus() }, 10)
        } else if (e.key === 'Backspace' ) {
            codes[idx].value = ''
            
            setTimeout(() => { codes[ idx - 1===-1?idx: idx-1].focus() }, 10)
        }
    })
})