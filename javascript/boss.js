let data = []
let data2 = []

const fetchData = async() => {
    await fetch("https://eldenring.fanapis.com/api/bosses?limit=100")
    .then( response => response.json())
    .then( json => {
        console.log(json)
        data.push(json.data)
    })
    .catch( error => console.error(error))
}

const SecondFetchData = async() => {
    await fetch("https://eldenring.fanapis.com/api/bosses?page=5")
    .then( response => response.json())
    .then( response => {
        console.log(response)
        data2.push(response.data)
    })
    .catch( error => console.error(error))
}


const itemsDisplay = async() => {
    await fetchData()
    await SecondFetchData()
    console.log(data)

    let display = ""

    let dataDisplayed = data[0].concat(data2[0])

    for( let item of dataDisplayed)
    display = display + `
    <a href="./oneboss.html?id=${item.id}">
    <div class="content">
        <div class="content__img">
            <img src="${item.image}" alt="${item.name}" class="item__img"/>
        </div>
        <div class="content__title">
            <h2>${item.name}</h2>
        </div>
    </div>
</a>

    `

    document.getElementById("boss").innerHTML = display
}

itemsDisplay()