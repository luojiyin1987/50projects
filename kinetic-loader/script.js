const kinetic = document.querySelector('.kinetic');

console.log("kinetic", kinetic)
// setTimeout(() => {
//     kinetic.style.display = 'none';
// }, 5000)

let load = 0;
let timerNum = setInterval(loading, 50);

function loading() {
    load++;
    if (load > 99) {
        clearInterval(timerNum);
    }
    kinetic.style.opacity = scale(load, 0, 100, 1, 0)
}

function scale(num, in_min, in_max, out_min, out_max) {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}