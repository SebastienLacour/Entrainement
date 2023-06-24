let data = []

const fetchData = async() => {
    await fetch("https://eldenring.fanapis.com/api/creatures?limit=115")
    .then( response => response.json())
    .then( response => {
        console.log(response)
        data.push(response.data)
    })
    .catch( error => console.error(error))
}

const itemsDisplay = async() => {
    await fetchData()

    const dataDisplayed = data[0]
    console.log(dataDisplayed)

    let display = ""

    for(let i = 0; i < dataDisplayed.length; i++) {
        display = display + `
        <a href="./onemob.html?id=${dataDisplayed[i].id}">
            <div class="content">
                <div class="content__img">
                    <img src="${dataDisplayed[i].image}" alt="${dataDisplayed[i].name}" class="item__img"/>
                </div>
                <div class="content__title">
                    <h2>${dataDisplayed[i].name}</h2>
                </div>
            </div>
        </a>
        `
    }

    document.getElementById("mobs").innerHTML = display
}

itemsDisplay()