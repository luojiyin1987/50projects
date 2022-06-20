const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = '0';
    updateCounter(counter);


    function updateCounter() {
        console.log('counter', counter.innerText);
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;
        const increment = target / 500;
        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 10);
        } else {
            counter.innerText = `${target}`;
        }
    }
})