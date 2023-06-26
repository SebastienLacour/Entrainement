let params = new URL(document.location).searchParams
const id = params.get("id")

let data = []

const fetchData = async() => {
    await fetch("https://eldenring.fanapis.com/api/bosses/" + id)
    .then(response => response.json())
    .then(json => {
        console.log(json)
        data.push(json.data)
    })
    .catch( error => console.error(error))
}

const itemsDisplay = async() => {
    await fetchData()

    const dataDisplayed = data[0]
    console.log(dataDisplayed)

    const TextContainer = document.getElementById("boss")

    const nameElement = document.createElement("h1")
    nameElement.innerText = dataDisplayed.name

    const imageContainer = document.createElement("div")
    imageContainer.className = "image-content-mobs"
    imageContainer.id = "image"

    const imageElement = document.createElement("img")
    imageElement.src = dataDisplayed.image
    imageElement.alt = dataDisplayed.name
    imageContainer.appendChild(imageElement)
    imageElement.className = "item__img"

    const healthPointElement = document.createElement("p")
    healthPointElement.innerText = "HP = " + dataDisplayed.healthPoints

    const divFlexElement = document.createElement("div")
    divFlexElement.id = "div-flex"
    divFlexElement.className = "flex-content"

    const dropsElement = document.createElement("ul")

    const drops = dataDisplayed.drops

    drops.forEach(element => {
        const drop = document.createElement("li")
        drop.innerText = element
        dropsElement.appendChild(drop)
    });

    const locations = dataDisplayed.location.split(",")

    const locationElement = document.createElement("ul")

    locations.forEach(element => {
        const location = document.createElement("li")
        location.innerText = element
        locationElement.appendChild(location)
    })

    const descriptionElement = document.createElement("cite")
    descriptionElement.innerText = dataDisplayed.description

    TextContainer.appendChild(nameElement)
    TextContainer.appendChild(imageContainer)
    TextContainer.appendChild(healthPointElement)
    TextContainer.appendChild(divFlexElement)
    divFlexElement.appendChild(dropsElement)
    divFlexElement.appendChild(locationElement)
    TextContainer.appendChild(descriptionElement)


    
}

itemsDisplay()