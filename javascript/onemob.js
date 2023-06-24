let params = new URL(document.location).searchParams
let id = params.get("id")

let data = []

const fetchData = async() => {
    await fetch("https://eldenring.fanapis.com/api/creatures/" + id)
    .then(response => response.json())
    .then(json => {
        console.log(json)
        data = json.data
    })
    .catch(error => console.error(error))
}

const itemDisplayed = async() => {
    await fetchData()
    console.log(data)

    const nameElement = document.createElement('h1')
    nameElement.textContent = data.name

    const divImageElement = document.createElement('div')
    divImageElement.className = "image-content-mobs"
    divImageElement.id = "image"

    const imageElement = document.createElement('img')
    imageElement.src = data.image
    imageElement.alt = data.name
    imageElement.className = "item__img"

    const descriptionElement = document.createElement('cite')
    descriptionElement.textContent = data.description

    const divFlexElement = document.createElement("div")
    divFlexElement.id = "div-flex"
    divFlexElement.className = "flex-content"

    const drops = data.drops

    const dropsList = document.createElement("ul")
    dropsList.id = "drop-list"


    for( let drop of drops) {
        const dropElement = document.createElement("li")
        dropElement.innerText = drop
        dropsList.appendChild(dropElement)
    }

    const locations = data.location.split(",")
    console.log(locations)

    const locationsList = document.createElement("ul")
    locations.id = "location-list"

    for( let location of locations) {
        const locationElement = document.createElement("li")
        locationElement.textContent = location
        locationsList.appendChild(locationElement)
    }

    document.getElementById("mob").appendChild(nameElement)
    document.getElementById("mob").appendChild(divImageElement)
    document.getElementById("image").appendChild(imageElement)
    document.getElementById("mob").appendChild(divFlexElement)
    document.getElementById("div-flex").appendChild(dropsList)
    document.getElementById("div-flex").appendChild(locationsList)
    document.getElementById("mob").appendChild(descriptionElement)
}

itemDisplayed()