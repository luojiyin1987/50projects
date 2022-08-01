const container = document.querySelector('.container')
const unsplashURL = 'https://source.unsplash.com/random/'
const rows = 5



function randomImage() {

    for (let i = 0; i < rows * 3; i++) {
        const img = document.createElement('img')
       
        img.classList.add('lozad')
        img.src = `${unsplashURL}${getRandomSize()}`
        img.setAttribute('data-src', `${unsplashURL}${getRandomSize()}`)
        container.appendChild(img)
    }
}

function getRandomSize() {
    return getRandomNr() + 'x' + getRandomNr()
}

function getRandomNr() {
    return Math.floor(Math.random() * 100) + 300
}





window.addEventListener('scroll', () => {
    let scrollHeight = document.documentElement.scrollHeight;
    let scrollTop = document.documentElement.scrollTop;
    let clientHeight = document.documentElement.clientHeight;

    if ((scrollTop + clientHeight) > (scrollHeight - 5)) {
        setTimeout(randomImage, 1000);
    }
})

randomImage()