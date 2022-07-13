const html = document.documentElement
const canvas = document.getElementById('hero-lightpass')
const context = canvas.getContext("2d")

const frameCount = 148
function currentFrame(index) {
      return  `./img/key${index.toString()}.png`
}

function preloadImages(){
    for(let i=1; i< frameCount; i++) {
        // const img = new Image()
        // img.src = currentFrame(i)
        const res = document.createElement('link')
        res.rel= "preload"
        res.as = "image"
        res.href = currentFrame(i)
        document.head.appendChild(res)
    }
}

const img = new Image()
img.src = currentFrame(1)
canvas.width = 1920
canvas.height = 1080
img.onload = function() {
    context.drawImage(img, 0, 0)
}


function updateImage(index){
    img.src = currentFrame(index)
    context.drawImage(img, 0, 0)
}

window.addEventListener('scroll', () => {
    const scrollTop = html.scrollTop
    const maxScrollTop = html.scrollHeight  - window.innerHeight
    const scrollFraction = scrollTop /maxScrollTop
    const frameIndex = Math.min(
        frameCount -1 ,
        Math.ceil(scrollFraction * frameCount)
    )
    requestAnimationFrame( ()=> { updateImage(frameIndex+1)})
})

preloadImages()
