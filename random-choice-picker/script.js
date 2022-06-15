

const tagsEl = document.getElementById('tags');
const textArea = document.getElementById('textarea');
console.log('tagsEl', tagsEl);
console.log('textArea', textArea);

textArea.focus()
textArea.addEventListener('keyup', (e) => {
    createTags(e.target.value)
    console.log("keyup", e.value);
    if (e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = '';
        }, 10)
        randomSelect()
    }
})



function createTags(input) {
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim());
    tagsEl.innerHTML = '';

    tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.innerHTML = tag;
        tagEl.classList.add('tag');
        tagsEl.appendChild(tagEl);
    })
}


function randomSelect() {
    const times = 30;

    const interval = setInterval(() => {
        const radomTag = pickRandomTag();
        if (radomTag !== undefined) {
            highlightTag(radomTag);
            console.log("highlightTag");
            setTimeout(() => {
                unHighlightTag(radomTag);
                console.log("unHighlightTag");
            }, 100)
        }

    }, 100);

    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
            const randomTag = pickRandomTag();
            highlightTag(randomTag);
            console.log("finish");
        }, 100)
    }, times * 100);
}



function pickRandomTag() {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
    tag.classList.add('highlight');
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight');
}

