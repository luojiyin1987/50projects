const kinetic = document.querySelector('.kinetic');
const loadText = document.querySelector('.loading-text');


let load = 0;
let timerNum = setInterval(loading, 50);

function loading() {
    load++;
    if (load > 99) {
        clearInterval(timerNum);
        
    }
    loadText.innerText = `${load}%`
    kinetic.style.opacity = scale(load, 0, 100, 1, 0)
}

function scale(num, in_min, in_max, out_min, out_max) {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}