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
    divImageElement.className = "image-content"
    divImageElement.id = "image"

    const imageElement = document.createElement('img')
    imageElement.src = data.image
    imageElement.alt = data.name

    const descriptionElement = document.createElement('cite')
    descriptionElement.textContent = data.description

    


    document.getElementById("mob").appendChild(nameElement)
    document.getElementById("mob").appendChild(divImageElement)
    document.getElementById("image").appendChild(imageElement)
    document.getElementById("mob").appendChild(descriptionElement)

    


}

itemDisplayed()