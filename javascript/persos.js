let data = []

const fetchData = async() => {
    await fetch("https://eldenring.fanapis.com/api/classes")
    .then((response) => response.json())
    .then((response => {
        console.log(response.data)
        data.push(response.data)
    }))
    .catch( error => console.error(error))
}

fetchData()

const itemsDisplay = async() => {
    await fetchData()
    const dataDisplayed = data[0].splice(0,10)
    console.log(dataDisplayed)
    console.log(dataDisplayed.length)

    let display = ""

    for (let i = 0; i < dataDisplayed.length; i++) {
        display = display + `
        <a href="./item.html?id=${dataDisplayed[i].id}"/>
            <div class="content">
                <div class="content__img">
                <img src="${dataDisplayed[i].image}" alt="${dataDisplayed[i].name}"/>
                </div>
                <div class="content__title">
                <h2>${dataDisplayed[i].name}</h2>
                </div>
            </div>
        `
        
        document.getElementById("perso").innerHTML = display
    }
}
    

itemsDisplay()
