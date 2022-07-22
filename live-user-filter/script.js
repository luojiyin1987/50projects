const result = document.getElementById('result')
const filter = document.getElementById('filter')
const getDataBtn = document.getElementById('getDataBtn')

const listItems = []

const url = "https://randomuser.me/api?results=50"
getData()

filter.addEventListener('input', (e)=> {
    filterData(e.target.value)
})

getDataBtn.addEventListener('click', (e)=>{getData()})


async function getData() {
    const res = await fetch(url)
    const { results } = await res.json()

    result.innerHTML = ''

    results.forEach(user => {
        const li = document.createElement('li')

        listItems.push(li)

        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `

        result.appendChild(li)
    })
}

function filterData(searchTerm) {
    listItems.forEach( (item) => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
}

